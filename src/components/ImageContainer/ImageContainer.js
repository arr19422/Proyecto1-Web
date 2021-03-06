/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './ImageContainer.css'

const ImageContainer = () => (
  <div>
    <div className="div-cont">
      <img className="img-cont" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4IwKm" />
      <div className="card">
        <h3 className="h3-text">Consigue las mejores ofertas cuando compras en Microsoft Edge</h3>
        <p className="p-text">Este navegador gratuito te ayuda a encontrar el mejor precio con las características integradas de cupones y comparación de precios.</p>
        <a href="https://www.microsoft.com/es-es/edge/features" className="a-text">
          <span>MÁS CARACTERISTICAS</span>
        </a>
      </div>
    </div>
  </div>
)
export default ImageContainer
