import './style.css'
import React from 'react'
import IMAGE from './google.jpg'
import LOGO from './testing.svg'
import ClickCount from './ClickCounter'
export const App = () => {
  return (
    <React.Fragment>
      <h1>
        Hello World! - {process.env.NODE_ENV}:{process.env.name}
      </h1>
      <img src={IMAGE} alt="Logo" width="300" height="200" />
      <img src={LOGO} alt="Logo" width="300" />
      <ClickCount />
    </React.Fragment>
  )
}
