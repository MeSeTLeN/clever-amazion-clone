import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom'
import { getBasketTotal } from '../../reducer'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import './Payment.css'

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue()
  const history = useHistory()

  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    //   generate stripe secret allows to charge customer

    async function getClientSecret() {
      const response = await axios({
        method: 'post',
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [basket])

  console.log('The secret is >>>', clientSecret)

  async function handleSubmit(event) {
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        setSucceeded(true)
        setError(null)
        setProcessing(false)

        history.replace('/orders')
      })
  }

  function handleChange(event) {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          <Link to='/checkout'>Checkout ({basket?.length} items)</Link>
        </h1>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Kherson, Ukraine</p>
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            <form onSubmit={handleSubmit}>
              <div className='payment__info'>
                <span>
                  Payment through
                  <button href='https://stripe.com/'>Stripe</button>
                </span>
                <span>test card number 42 until end</span>
                <span>expample 4242 4242 4242 4242 04/24 242 42424</span>
              </div>

              <CardElement onChange={handleChange} />

              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
