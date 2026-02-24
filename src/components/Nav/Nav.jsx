import React from 'react'
import "./Nav.css"
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav__container">

        <Link to="/" className="nav__logo" href="#movies__main">
            <img src={Logo} className="nav__logo--img" alt="" />
        </Link>

        <ul className="nav__links">
            <li><Link to="/" className="nav__link yellow">Home</Link></li>
            <li><Link to="/"  className="nav__link yellow">Movies</Link></li>
        </ul>
      </div>
  )
}

export default Nav
