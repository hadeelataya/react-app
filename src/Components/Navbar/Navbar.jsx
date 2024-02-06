import React , { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return  (
            <>
 <nav className="navbar navbar-expand-lg my-bg fixed-top py-3" >
  <div className="container">
    <Link className="navbar-brand text-uppercase fw-bold mt-3 mt-md-0 px-2 fs-3" style={{color : 'white'}} to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <Link className="nav-link text-uppercase fw-bold mt-3 mt-md-0 px-2" to="/about">About</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link text-uppercase fw-bold mt-3 mt-md-0 px-2" to="/portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link text-uppercase fw-bold mt-3 mt-md-0 px-2" to="/contact">CONATCT</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

            </>

        )
    }
}