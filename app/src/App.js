import React, { useState } from 'react'
import Form from './components/Form'
import Container from './components/Container'

function App() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="App">
      {!showForm ? (
        <Container>
          <img
            src="/foundit-logo.png"
            width="75px"
            height="75px"
            alt="Found It logo"
            style={{ borderRadius: '50%' }}
          />
          <h1>Found It</h1>
          <p>
            On the morning of 7th January 2021 I was walking my dog near the
            London Academy in Edgware, London, and I found a pair of Apple Air
            Pod headphones.
          </p>
          <p>
            In an attempt to locate the original owner of said headphones I made
            this website.
          </p>
          <p>
            If you believe the mentioned headphones to be yours please fill in
            the form and I will contact you.
          </p>
          <p style={{ fontWeight: 'bolder', fontStyle: 'italic' }}>
            Please note that I will only contact you if you correctly identify
            the Apple AirPods which I found.
          </p>
          <button onClick={() => setShowForm(true)}>Begin</button>
        </Container>
      ) : (
        <Form title="Claim AirPods" toggleVisibility={setShowForm} />
      )}
      <footer
        style={{
          maxWidth: 500,
          width: '100%',
          textAlign: 'center',
          color: 'white',
          margin: 'auto',
          fontSize: '1.2rem',
        }}
      >
        Your information is not stored on any database or shared with any third
        parties other than Google's reCaptcha bot prevention.
      </footer>
    </div>
  )
}

export default App
