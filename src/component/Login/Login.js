import React, { useState } from 'react'
import './Login.css'
import logoBlack from '../../assets/img_desktop/Login/logo_black.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={logoBlack} />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' />

          <h5>Password</h5>
          <input type='password' />

          <button className='login__signInBtn'>Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button className='login__registerBtn'>
          Create your Amazon account
        </button>
      </div>
    </div>
  )
}

export default Login
