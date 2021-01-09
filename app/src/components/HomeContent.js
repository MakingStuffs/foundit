import React from 'react'

const HomeContent = () => (
  <div className="content">
    <p>
      On the morning of 7th January 2021 I was walking my dog near the London
      Academy in Edgware, London, and I found a pair of Apple Air Pod
      headphones.
    </p>
    <p>
      In an attempt to locate the original owner of said headphones I made this
      website.
    </p>
    <p>
      If you believe the mentioned headphones to be yours please fill in the
      form and I will contact you.
    </p>
    <p style={{ fontWeight: 'bolder', fontStyle: 'italic' }}>
      Please note that I will only contact you if you correctly identify the
      Apple AirPods which I found.
    </p>
    <p>
      This website does not store your data and I will only be notified if you
      correctly identify the headphones.
    </p>
    <p>
      You can verify the website&apos;s source code in this{' '}
      <a
        href="https://github.com/MakingStuffs/foundit"
        rel="noopener noreferrer"
        target="_blank"
        title="Found It's GitHub repository"
      >
        GitHub repository
      </a>
    </p>
  </div>
)

export default HomeContent
