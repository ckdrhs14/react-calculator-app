import React from 'react'
import './alert.css'

const alert = ({type, text}) => {
  return (
    <div className={`alert alert-${type}`}>
      {text}
    </div>
  )
}

export default alert
