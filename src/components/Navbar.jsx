import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo2.png';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="logo-text">SwiftHire</span>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/features" className="nav-link">
            Features
          </Link>
          <Link to="/candidates" className="nav-link">
            Candidates
          </Link>
          <Link to="/collaboration" className="nav-link">
            Collaboration
          </Link>
          <Link to="/jobposting" className="nav-link">
            Job Posting
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>

        {/* Login and Register */}
        <div className="login-register">
          <Link to="/login" className="login-link">
            Login
          </Link>
          <Link to="/register" className="register-link">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
