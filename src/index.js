/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar/NavBar'
import Container from './components/Container/Container'
import Cards from './components/Card/Card'
import ImageContainer from './components/ImageContainer/ImageContainer'
import Device from './components/Device/Device'
import Title from './components/Title/Title'
import Info from './components/Info/Info'

const App = () => (
  <div>
    <NavBar />
    <Container />
    <Cards />
    <ImageContainer />
    <Title />
    <Device />
    <Info />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
