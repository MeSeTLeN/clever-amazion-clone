import React from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <div>
          <h2 className='checkout__title'>Shopping Cart</h2>

          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>

      <div className='checkout__right'>
        <div>
          <Subtotal />
        </div>
      </div>
    </div>
  )
}

export default Checkout
