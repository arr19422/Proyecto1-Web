/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import NavBarItems from './MenuItems'
import './NavBar.css'

const NavBar = () => (
  <nav className="NavBar">
    <h2>React</h2>
    <ul className="nav-menu">
      {NavBarItems.map((item, index) => (
        <li key={index}><a className={item.class} href={item.href}>{item.text}</a></li>
      ))}
    </ul>
  </nav>
)

export default NavBar
