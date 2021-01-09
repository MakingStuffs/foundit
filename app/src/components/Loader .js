import React from 'react'

const Loader = ({ loading }) =>
  loading !== false && (
    <>
      <span className="loader"></span>
    </>
  )

export default Loader
