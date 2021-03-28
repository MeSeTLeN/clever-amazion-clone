import moment from 'moment'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../reducer'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import './Order.css'

function Order({ order }) {
  return (
    <div className='order'>
      <h2>Order</h2>

      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>

      <p className='order__id'>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  )
}

export default Order
