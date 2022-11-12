import React from 'react'
import { Link ,NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
      <nav className={` ${styles.myNav} navbar navbar-expand-lg p-3 fixed-top`}>
        <div className="container-fluid ">
          <Link  className= "navbar-brand text-white fs-3 fw-bold" to="/">START REACT</Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon " />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto fs-5 fw-semibold">
              <li className="nav-item me-3">
                <NavLink className={`nav-link text-white`} aria-current="page" to="/">HOME</NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className={` nav-link text-white`} to="/portfolio">PORTFOLIO</NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className={` nav-link text-white`} to="/about">ABOUT</NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className={` nav-link text-white`} to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
