import React from 'react'
import { useStateValue } from '../../StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  function removeFromBasket() {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <div className='checkoutProduct__img'>
        <img className='checkoutProduct__img' src={image} />
      </div>

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>

        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>★</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
