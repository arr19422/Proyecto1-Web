/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import DeviceItems from './DeviceItems'
import './Device.css'

const Device = () => (
  <div className="device-grid">
    {DeviceItems.map((item) => (
      <div className="device-div">
        <img className={item.classImg} src={item.image} />
        <h3 className={item.classH3}>{item.title}</h3>
        <p className={item.classP}>{item.desc}</p>
        <a href={item.url}>
          <img className={item.classImgA} src={item.imageA} />
        </a>
      </div>
    ))}
  </div>
)
export default Device
