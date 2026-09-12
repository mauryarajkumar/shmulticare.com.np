

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../components/images/logo-removebg-preview.png"

export default function Navbar() {


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

// auto hide the menu when the navlist clicked
useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";
}, [menuOpen]);

  return (
    
    <header className="navbar">
      <div className="container nav-content">

        {/* Logo */}
       <div className="logo">
  <img
    src={logo}
    alt="Siddhartha Health & Multicare"
    className="logo-img"
  />

  <div className="logo-text">
    <span className="logo-main">Siddhartha</span>
    <span className="logo-sub">Health &amp; Multicare Pvt. Ltd.</span>
  </div>
</div>


        {/* Desktop Links */}
        <nav className="nav-links desktop">
          {/* <a href="#">Home</a> */}
          {/* <Link to="/">Home</Link> */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>  Home </Link>

           {/* <a href="#doctorsit">Doctor's</a> */}
           <Link to="/doctors" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Doctor's</Link>

            {/* <a href="#services">Our Services</a> */}
             <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Our Services</Link>
          {/* <a href="#about">About Us</a> */}
            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>About Us</Link>
         
          {/* <a href="#contact">Contact Us</a> */}
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Contact Us</Link>
           {/* <a href="#googlemap">Google Map</a> */}
              <Link to="/googlemap" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Google Map</Link>
                <Link to="/adminlogin"  onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" }); closeMenu();  }}>Admin Panel</Link>
        </nav>

        {/* Hamburger Button */}
        <button
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      
       <nav className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link   to="/"   onClick={() => {    window.scrollTo({ top: 0, behavior: "smooth" }); closeMenu();  }}>
  Home
</Link>
        <Link to="/doctors" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" }); closeMenu();  }}>Doctor's</Link>
        <Link to="/services" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); closeMenu();  }}>Our Services</Link>
        <Link to="/about"  onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); closeMenu();  }}>About Us</Link>
        <Link to="/contact" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" }); closeMenu();  }}>Contact Us</Link>
        <Link to="/googlemap"  onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" }); closeMenu();  }}>Google Map</Link>
        <Link to="/adminlogin"  onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" }); closeMenu();  }}>Admin Panel</Link>
      </nav>
    </header>



  );
}
