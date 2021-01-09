import React, { useEffect, useState } from 'react'

const Form = ({ toggleVisibility }) => {
  const [current, setCurrent] = useState(0)
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
          return setTimeout(() => {
            setLoading(false)
            return data.status === 200
              ? setNotification(data.message)
              : setErrorMessage(data.message)
          }, 3000)
        })
    )
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (current !== questions.length - 1) {
      return setCurrent(current + 1)
    }
    setLoading(true)
    return sendForm()
  }

  const validateField = (value, type = null) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (value === '') {
      setErrorMessage(`This field cannot be empty`)
      return false
    }
    if (value.length < 3) {
      setErrorMessage(`This field must be at least three characters`)
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

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://www.google.com/recaptcha/api.js?render=6LdTzCUaAAAAABJFQhrEhUVV3CAr2s1DvrH9M3gg'
    document.body.appendChild(script)
  }, [])

  const questions = [
    <div className="form-input">
      <label>What is the device name?</label>
      <span className="description">
        The device name is the name which appears when you pair it. For example:
        Paul's AirPods
      </span>
      <input
        name="deviceName"
        value={formData.deviceName}
        type="text"
        onChange={changeHandler}
        required={true}
        inputMode="text"
      />
    </div>,
    <div className="form-switch">
      <p>Are they in a case?</p>
      <span className="description">
        This does not mean the charging box which comes with the headphones.
      </span>
      <label className="switch">
        <input
          name="hasCase"
          checked={formData.hasCase}
          type="checkbox"
          onChange={changeHandler}
        />
        <span className="slider"></span>
        <span className="status">{formData.hasCase ? 'Yes' : 'No'}</span>
      </label>
    </div>,
    <div className="form-input">
      <label>What colour is the case?</label>
      <span className="description">
        Again, this is not referring to the charging box which comes with the
        headphones.
      </span>
      <input
        name="caseColour"
        value={formData.caseColour}
        type="text"
        inputMode="text"
        onChange={changeHandler}
      />
    </div>,
    <div className="form-input">
      <label>What Material is the Case?</label>
      <span className="description">
        A one word answer such as 'plastic', 'rubber' or 'wood' will do.
      </span>
      <input
        name="caseMaterial"
        value={formData.caseMaterial}
        type="text"
        onChange={changeHandler}
        inputMode="text"
      />
    </div>,
    <div className="form-switch">
      <p>Does the Case Have Accessories?</p>
      <span className="description">
        An accessory could be something like a light, clip or a sticker.
      </span>
      <label className="switch">
        <input
          name="caseHasAccessories"
          checked={formData.caseHasAccessories}
          type="checkbox"
          onChange={changeHandler}
        />
        <span className="slider"></span>
        <span className="status">
          {formData.caseHasAccessories ? 'Yes' : 'No'}
        </span>
      </label>
    </div>,
    <div className="form-input">
      <label>What is it?</label>
      <span className="description">
        Describe the accessory attached to the case.
      </span>
      <input
        name="caseAccessories"
        value={formData.caseAccessories}
        type="text"
        onChange={changeHandler}
        inputMode="text"
      />
    </div>,
    <div className="form-input">
      <label>What is your name?</label>
      <span className="description">
        If you would prefer not to say just say 'prefer not to say'
      </span>
      <input
        name="name"
        value={formData.name}
        type="text"
        onChange={changeHandler}
        inputMode="text"
        required={true}
      />
    </div>,
    <div className="form-input">
      <label>What is your email address?</label>
      <span className="description">
        This will only be used to contact you if you correctly identify the
        AirPods. No information is stored within a database.
      </span>
      <input
        name="email"
        value={formData.email}
        type="text"
        onChange={changeHandler}
        inputMode="email"
        required={true}
      />
    </div>,
    <div className="form-input">
      <label>What is your phone number?</label>
      <span className="description">
        Again, this will only be used to contact you in the case you correctly
        identify the headphones and is not stored in a database.
      </span>
      <input
        name="phone"
        value={formData.phone}
        type="number"
        onChange={changeHandler}
        inputMode="tel"
        required={true}
        minLength="11"
      />
    </div>,
    <div className="confirmation-container">
      <h2>Your Answers</h2>
      <p className="description">
        Please confirm you submitted the correct information or go back and
        alter your input.
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Name: </span>
        {formData.name}
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Phone: </span>
        {formData.phone}
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Email: </span>
        {formData.email}
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Device Name: </span>
        {formData.deviceName}
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Description: </span>
        {formData.hasCase
          ? `Has a ${formData.caseColour} case which is made of ${
              formData.caseMaterial
            }${
              formData.caseHasAccessories
                ? ` and has a ${formData.caseAccessories}`
                : '.'
            }`
          : 'No case or accessories.'}
      </p>
    </div>,
  ]

  return (
    <>
      {notification !== '' && (
        <>
          <div className="overlay"></div>
          <div className="notification-box">
            <img
              src="/foundit-logo.png"
              width="50px"
              height="50px"
              alt="Found It logo"
              style={{ borderRadius: '50%' }}
            />
            <h3>Success</h3>
            <p>{notification}</p>
            <button
              onClick={() => {
                setNotification('')
                toggleVisibility(false)
              }}
            >
              Close
            </button>
          </div>
        </>
      )}
      {errorMessage !== '' && (
        <>
          <div className="overlay"></div>
          <div className="error-box">
            <img
              src="/foundit-logo.png"
              width="50px"
              height="50px"
              alt="Found It logo"
              style={{ borderRadius: '50%' }}
            />
            <h3>Error</h3>
            <p>{errorMessage}</p>
            <button onClick={() => setErrorMessage('')}>Close</button>
          </div>
        </>
      )}
      <div
        className="g-recaptcha"
        data-sitekey="6LdTzCUaAAAAABJFQhrEhUVV3CAr2s1DvrH9M3gg"
        data-size="invisible"
      ></div>
      <form className="container" onSubmit={submitHandler}>
        <img
          src="/foundit-logo.png"
          width="50px"
          height="50px"
          alt="Found It logo"
          style={{ borderRadius: '50%' }}
        />
        {loading !== false && (
          <>
            <span className="loader"></span>
          </>
        )}
        <button
          className="close-button"
          type="button"
          onClick={() => toggleVisibility(false)}
        ></button>
        {questions[current]}
        {current !== 0 && (
          <button type="button" onClick={backButtonHandler}>
            Prev
          </button>
        )}
        {current !== questions.length - 1 && (
          <button type="button" onClick={nextButtonHandler}>
            Next
          </button>
        )}
        {current === questions.length - 1 && (
          <button type="submit">Submit</button>
        )}
      </form>
    </>
  )
}
export default Form
