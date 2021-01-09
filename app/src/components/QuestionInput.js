import React from 'react'

const QuestionInput = ({
  changeHandler,
  label,
  description,
  inputMode = 'text',
  type = 'text',
  value,
  name,
  required = true,
}) => (
  <div className="form-input">
    <label>{label}</label>
    <span className="description">{description}</span>
    <input
      name={name}
      value={value}
      type={type}
      inputMode={inputMode}
      required={required}
      onChange={changeHandler}
    />
  </div>
)
export default QuestionInput
