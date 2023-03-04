import './verifyEmail.css'
import {useAuthValue} from './AuthContext'
import {useState, useEffect} from 'react'
import {auth} from './firebase'
import {sendEmailVerification} from 'firebase/auth'
import {useHistory} from 'react-router-dom'

function VerifyEmail() {
  const {currentUser} = useAuthValue()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [time, setTime] = useState(60)
  const [timeActive, setTimeActive] = useAuthValue()
  const history = useHistory()
  const resendEmailverification = () => {
    setButtonDisabled(true)
    sendEmailVerification(auth.currentUser)
    .then(() => {
      setButtonDisabled(false)
      setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
      setButtonDisabled(false)
    })
  }

  useEffect(() => {
    let interval = null
    if(timeActive && time !== 0 ){
      interval = setInterval(() => {
        setTimeActive((time) => -1)
      }, 1000)
    }else if(time === 0){
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeActive, time])

  useEffect(() => {
    const intverval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          clearInterval(intverval)
          history.push('/')
        }
      })
      .catch((err) => {
        alert(err.message)
      })
    }, 1000)
  }, [history, currentUser])

  return (
    <div className='center'>
      <div className='verifyEmail'>
        <h1>Verify your Email Address</h1>
        <p>
          <strong>A Verification email has been sent to:</strong><br/>
          <span>{currentUser?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>
        <button
          onClick={resendEmailverification}
          disabled={timeActive}
          >Resend Email {timeActive && time}</button>
      </div>
    </div>
  )
}

export default VerifyEmail
