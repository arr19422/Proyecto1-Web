/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar/NavBar'

const App = () => (
  <div>
    <NavBar />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
