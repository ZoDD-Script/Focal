import React from 'react'
import { logowhite } from '../assets/img'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top"> <img src={logowhite} alt="logo" width={100} /> </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="services" smooth={true} duration={500}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="portfolio" smooth={true} duration={500}>Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="team" smooth={true} duration={500}>Team</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="contact" smooth={true} duration={500}>Contact</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar