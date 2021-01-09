import React from 'react'

const FormFooter = ({
  backHandler,
  nextHandler,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <div className="footer">
      {currentQuestion !== 0 && (
        <button type="button" onClick={backHandler}>
          Prev
        </button>
      )}
      {currentQuestion !== totalQuestions && (
        <button type="button" onClick={nextHandler}>
          Next
        </button>
      )}
      {currentQuestion === totalQuestions && (
        <button type="submit">Submit</button>
      )}
    </div>
  )
}

export default FormFooter
