import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container">
      <div className="row footer__row">
        <figure className="footer__logo">
            <img src="assets/logo.png" className="footer__logo--img" alt="" />
        </figure>
        <div className="footer__list">
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/" className="footer__link">Movies</Link>
        </div>
        <div className="footer__copyright">Copyright &copy; 2026 Movie Search Website</div>
      </div>
    </div>
  )
}

export default Footer
