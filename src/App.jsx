import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import logo from './asset/logo.png'

function App() {
  return (
    <div className="App">
      <header className="header  text-white bg-dark py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo d-flex align-items-center">
            <img src={logo} alt="Logo" className="logo-image" />
            {/* <h1 className="h4 mb-0 ms-2">DHARA JADA</h1> */}
          </div>

          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/resume">Resume</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          {/* <div className="action d-flex align-items-center">
            <button className="btn btn-warning me-3">Hire Me</button>
            <span className="social-icon">&#128526;</span>
          </div> */}
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>


      </main>



      <footer className="footer bg-dark text-white py-3">
        <div className="container text-center">
          <div className="social-icons mb-3">
            <a href="#" className="text-white mx-2"><FaWhatsappSquare /></a>
            <a href="#" className="text-white mx-2"><FaLinkedin /></a>
            <a href="#" className="text-white mx-2"><FaFacebook /></a>
          </div>
          <p className="mb-0">&copy; 2024 JADA DHARA. All rights reserved.</p>
        </div>

      </footer>
    </div>
  );
}

export default App;
