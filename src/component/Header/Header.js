import React from 'react'
import './Header.css'
import cart from '../../assets/img_desktop/Header/shopping-cart.svg'
import logo from '../../assets/img_desktop/Header/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase'

function Header() {
  const [{ basket, user }, dispatch] = useStateValue()

  function handleAuthentication() {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='logo' />
      </Link>

      <form className='header__search'>
        <input className='search__input' type='text' />
        <div className='search__btn'>
          <SearchIcon />
        </div>
      </form>

      <div className='header__nav'>
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className='option option__sign'>
            <span className='option_text_light'>
              Hello, {user ? user.email : 'Guest'}
            </span>
            <span className='option_text_bold'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <div className='option option__orders'>
          <span className='option_text_light'>Returns</span>
          <span className='option_text_bold'>& Orders</span>
        </div>

        <Link to='/checkout'>
          <div className='option option__cart'>
            <img src={cart} alt='cart' />
            <span className='cart__count option_text_bold'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
