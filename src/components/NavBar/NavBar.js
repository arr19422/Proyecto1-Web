/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import NavBarItems from './MenuItems'
import './NavBar.css'

const NavBar = () => (
  <nav className="NavBar">
    <div className="microsoftLogo">
      <a href="https://www.microsoft.com/es-gt/">
        <img className="img-logo" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" />
      </a>
    </div>
    <ul className="nav-menu">
      {NavBarItems.map((item, index) => (
        <li key={index}><a className={item.class} href={item.href}>{item.text}</a></li>
      ))}
    </ul>
    <a href="@" className="nav-items-drop">Todo Microsoft</a>
    <a href="@" className="nav-items-drop">Buscar</a>
  </nav>
)

export default NavBar
