/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar/NavBar'
import Container from './components/Container/Container'
import Cards from './components/Card/Card'

const App = () => (
  <div>
    <NavBar />
    <Container />
    <Cards />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
