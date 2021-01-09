import React, { useEffect } from 'react'
import QuestionInput from './QuestionInput'
import QuestionSwitch from './QuestionSwitch'

const QuestionList = ({ current, formData, changeHandler, setTotal }) => {
  const questions = [
    <QuestionInput
      key="deviceName"
      name="deviceName"
      changeHandler={changeHandler}
      value={formData.deviceName}
      label="What is the device name?"
      description="The device name is the name which appears when you pair it. For example:
          Paul's AirPods"
    />,
    <QuestionSwitch
      value={formData.hasCase}
      changeHandler={changeHandler}
      name="hasCase"
      key="hasCase"
      label="Are they in a case?"
      description="This does not mean the charging box which comes with the headphones."
    />,
    <QuestionInput
      label="What colour is the case?"
      description="Again, this is not referring to the charging box which comes with the
          headphones."
      name="caseColour"
      key="caseColour"
      value={formData.caseColour}
      changeHandler={changeHandler}
      required={false}
    />,
    <QuestionInput
      label="What material is the case?"
      description="A one word answer such as 'plastic', 'rubber' or 'wood' will do."
      name="caseMaterial"
      key="caseMaterial"
      value={formData.caseMaterial}
      changeHandler={changeHandler}
      required={false}
    />,
    <QuestionSwitch
      label="Does the case have accessories?"
      description="An accessory could be something like a light, clip or a sticker."
      value={formData.caseHasAccessories}
      changeHandler={changeHandler}
      name="caseHasAccessories"
      key="caseHasAccessories"
    />,
    <QuestionInput
      label="What is it?"
      description="Describe the accessory attached to the case. One word will do, for example: sticker, light, clip etc."
      name="caseAccessories"
      key="caseAccessories"
      value={formData.caseAccessories}
      changeHandler={changeHandler}
      required={false}
    />,
    <QuestionInput
      label="What is your name?"
      description="If you would prefer not to say just say 'prefer not to say'"
      name="name"
      key="name"
      value={formData.name}
      changeHandler={changeHandler}
    />,
    <QuestionInput
      label="What is your email address?"
      description="This will only be used to contact you if you correctly identify the
          AirPods. No information is stored within a database."
      key="email"
      name="email"
      type="email"
      value={formData.email}
      changeHandler={changeHandler}
    />,
    <QuestionInput
      label="What is your phone number?"
      description="Again, this will only be used to contact you in the case you correctly
          identify the headphones and is not stored in a database."
      key="phone"
      name="phone"
      type="number"
      inputMode="tel"
      value={formData.phone}
      changeHandler={changeHandler}
    />,
    <div key="confirm" className="confirmation-container">
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

  useEffect(() => {
    setTotal(questions.length - 1)
  }, [])


  return <div className="content">{questions[current]}</div>
}

export default QuestionList
