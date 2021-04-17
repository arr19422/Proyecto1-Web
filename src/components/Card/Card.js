/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import CardItems from './CardItems'
import './Card.css'

const Card = () => (
  <div className="card-grid">
    {CardItems.map((item) => (
      <div>
        <img className={item.classImg} src={item.image} />
        <h3 className={item.classH3}>{item.title}</h3>
        <p className={item.classP}>{item.desc}</p>
      </div>
    ))}
  </div>
)
export default Card
