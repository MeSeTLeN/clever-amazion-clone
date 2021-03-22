import React from 'react'
import './Header.css'
import cart from '../../assets/img_desktop/Header/shopping-cart.svg'
import logo from '../../assets/img_desktop/Header/logo.png'
import SearchIcon from '@material-ui/icons/Search'

function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src={logo} alt='logo' />

      <form className='header__search'>
        <input className='search__input' type='text' />
        <div className='search__btn'>
          <SearchIcon />
        </div>
      </form>

      <div className='header__nav'>
        <div className='option option__sign'>
          <span className='option_text_light'>Hello, Sign in</span>
          <span className='option_text_bold'>Account & Lists</span>
        </div>
        <div className='option option__orders'>
          <span className='option_text_light'>Returns</span>
          <span className='option_text_bold'>& Orders</span>
        </div>
        <div className='option option__cart'>
          <img src={cart} alt='cart' />
          <span className='cart__count option_text_bold'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header
