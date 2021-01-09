import React, { useEffect, useState } from 'react'
import FormFooter from './FormFooter'
import Notification from './Notification'
import FoundItHeader from './FoundItHeader'
import Loader from './Loader '
import ReCaptcha from './ReCaptcha'
import QuestionList from './QuestionsList'

const Form = ({ toggleVisibility }) => {
  const [current, setCurrent] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    deviceName: '',
    hasCase: false,
    caseColour: '',
    caseMaterial: '',
    caseHasAccessories: false,
    caseAccessories: '',
    name: '',
    email: '',
    phone: '',
    token: '',
  })

  const changeHandler = (event) => {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    setFormData({ ...formData, [name]: value })
  }

  const sendForm = () => {
    window.grecaptcha.ready(() =>
      window.grecaptcha
        .execute('6LdTzCUaAAAAABJFQhrEhUVV3CAr2s1DvrH9M3gg', {
          action: 'submit',
        })
        .then(async (token) => {
          formData.token = token
          const response = await fetch('/api/submit/claim', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          const data = await response.json()
          console.log(data.status)
          return setTimeout(() => {
            setLoading(false)
            return data.status === 200
              ? setNotification(data.message)
              : setErrorMessage(data.message)
          }, 3000)
        }).catch(() => {
          setTimeout(() => {
            setErrorMessage('There has been a problem with the server. Please try again later.')
            setLoading(false)
          }, 3000)
        })
    )
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (current !== totalQuestions) {
      return setCurrent(current + 1)
    }
    setLoading(true)
    return sendForm()
  }

  const validateField = (value, type = null) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (value === '') {
      setErrorMessage('This field cannot be empty')
      return false
    }
    if (value.length < 3) {
      setErrorMessage('This field must be at least three characters')
      return false
    }
    if (type === 'email') {
      const valid = emailRegex.test(value)
      if (!valid) {
        setErrorMessage(`${value} does not appear to be a valid email address`)
        return false
      }
    }
    if (type === 'phone') {
      if (value.length < 11) {
        setErrorMessage(
          `You did not enter a valid phone number. It should be at least 11 digits. You entered ${value}`
        )
        return false
      }
    }
    return true
  }

  const nextButtonHandler = () => {
    const currentField = Object.keys(formData)[current]
    const currentFieldValue = formData[currentField]
    const fieldValidated = validateField(currentFieldValue, currentField)
    if (!fieldValidated) return

    if (!formData.hasCase && current === 1) {
      return setCurrent(current + 5)
    }

    if (!formData.caseHasAccessories && current === 4) {
      return setCurrent(current + 2)
    }

    setCurrent(current + 1)
  }

  const backButtonHandler = () => {
    if (!formData.hasCase && (current === 4 || current === 6)) {
      return setCurrent(0)
    }
    if (formData.hasCase && !formData.caseHasAccessories && current === 6) {
      return setCurrent(current - 2)
    }
    setCurrent(current - 1)
  }

  const notificationCallback = () => {
    if (errorMessage !== '') {
      setErrorMessage('')
    } else {
      setNotification('')
      toggleVisibility(false)
    }
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://www.google.com/recaptcha/api.js?render=6LdTzCUaAAAAABJFQhrEhUVV3CAr2s1DvrH9M3gg'
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <Notification
        errorMessage={errorMessage}
        successMessage={notification}
        closeHandler={notificationCallback}
      />
      <ReCaptcha />
      <form className="container" onSubmit={submitHandler}>
        <FoundItHeader />
        <Loader loading={loading} />
        <button
          className="close-button"
          type="button"
          onClick={() => toggleVisibility(false)}
        ></button>
        <QuestionList
          current={current}
          formData={formData}
          changeHandler={changeHandler}
          setTotal={setTotalQuestions}
        />
        <FormFooter
          backHandler={backButtonHandler}
          nextHandler={nextButtonHandler}
          currentQuestion={current}
          totalQuestions={totalQuestions}
        />
      </form>
    </>
  )
}
export default Form
