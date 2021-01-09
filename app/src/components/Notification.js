import React from 'react'

const Notification = ({ closeHandler, errorMessage, successMessage }) => {
  const hasMessage = errorMessage || successMessage
  const getMessageParagraphs = (msg) => msg.split('.').map((p, i) => <p key={i + Math.random()}>{p}</p>)
  return (
    hasMessage && (
      <>
        <div className="overlay"></div>
        <div className={errorMessage ? 'error-box' : 'notification-box'}>
          <div className="header">
            <img
              src="/foundit-logo.png"
              width="50px"
              height="50px"
              alt="Found It logo"
              style={{ borderRadius: '50%' }}
            />
            <p>{errorMessage ? 'error' : 'success'}</p>
          </div>
          <div className="content">
            <p>
              {errorMessage
                ? getMessageParagraphs(errorMessage)
                : getMessageParagraphs(successMessage)}
            </p>
          </div>
          <div className="footer">
            <button ariaLabel="Close" type="button" onClick={closeHandler}>
              Close
            </button>
          </div>
        </div>
      </>
    )
  )
}

export default Notification
