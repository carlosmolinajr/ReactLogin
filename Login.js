import {useState} from 'react'
import {useHistory, Link } from 'react-router-dom'
import './css/forms.css'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from './firebase'
import {useAuthValue} from './AuthContext'
import PropTypes from 'prop-types'

async function loginUser(credentials) {
  return fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application.json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}
function Login({ setToken }){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()

  const history = useHistory()

  const login = async e => {
    e.preventDefault()
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          history.push('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      history.push('/navbar')
    }
    })
    .catch(err => setError(err.message))
  }
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

  return(
    <div className='center'>
      <div className='auth'>
        <h1>Log in</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={login} name='login_form'>
          <input
            type='email'
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>

          <input
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

          <button type='submit'>Login</button>
        </form>
        <p>
          Don't have and account?
          <Link to='/register'>Create one here</Link>
        </p>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login
