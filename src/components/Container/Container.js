/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './Container.css'

const Container = () => (
  <div>
    <div>
      <img className="img-container" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4ncJa" />
    </div>
    <div className="div-container">
      <h1 className="div-text h1-text">Microsoft Edge es el mejor navegador para las compras</h1>
      <p className="div-text">Microsoft Edge es el único navegador con herramientas integradas que te ayudan a ahorrar tiempo y dinero cuando compras online.</p>
      <div>
        <a href="https://www.microsoft.com/es-es/edge/features" className="a-container">
          <span>VER CARACTERISTICAS</span>
        </a>
      </div>
    </div>
  </div>
)
export default Container
