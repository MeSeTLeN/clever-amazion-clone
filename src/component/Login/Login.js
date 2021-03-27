import React, { useState } from 'react'
import './Login.css'
import logoBlack from '../../assets/img_desktop/Login/logo_black.png'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function signIn(event) {
    event.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/')
      })
      .catch((error) => alert(error.message))
  }

  function register(event) {
    event.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/')
        }
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={logoBlack} />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type='text'
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type='password'
          />

          <button onClick={signIn} className='login__signInBtn' type='submit'>
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button onClick={register} className='login__registerBtn'>
          Create your Amazon account
        </button>
      </div>
    </div>
  )
}

export default Login
