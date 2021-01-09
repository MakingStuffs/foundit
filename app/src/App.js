import React, { useState } from 'react'
import Form from './components/Form'
import FoundItHeader from './components/FoundItHeader'
import Container from './components/Container'
import HomeContent from './components/HomeContent'
import HomeContentFooter from './components/HomeContentFooter'
import MainFooter from './components/MainFooter'

function App() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="App">
      {!showForm ? (
        <Container>
          <FoundItHeader />
          <HomeContent />
          <HomeContentFooter buttonCallback={() => setShowForm(true)} />
        </Container>
      ) : (
        <Form title="Claim AirPods" toggleVisibility={setShowForm} />
      )}
      <MainFooter />
    </div>
  )
}

export default App
