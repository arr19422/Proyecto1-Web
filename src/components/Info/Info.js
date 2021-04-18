/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import CardItems from './InfoItems'
import './Info.css'

const Info = () => (
  <div className="info-grid">
    {CardItems.map((item) => (
      <div>
        <img className={item.classImg} src={item.image} />
        <div className="div-info">
          <h3 className={item.classH3}>{item.desc}</h3>
          <a href={item.url} className={item.classA}>MÁS INFORMACIÓN</a>
        </div>
      </div>
    ))}
  </div>
)
export default Info
