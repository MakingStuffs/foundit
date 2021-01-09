import React from 'react'

const QuestionSwitch = ({ label, description, value, changeHandler, name }) => {
  return (
    <div className="form-switch">
      <p>{label}</p>
      <span className="description">{description}</span>
      <label className="switch">
        <input
          name={name}
          checked={value}
          type="checkbox"
          onChange={changeHandler}
        />
        <span className="slider"></span>
        <span className="status">{value ? 'Yes' : 'No'}</span>
      </label>
    </div>
  )
}

export default QuestionSwitch
