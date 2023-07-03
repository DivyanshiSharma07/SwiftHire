import React from 'react';
import './styles/Register.css';

const Registration = () => {
  return (
    <div className="container">
      <form className="form">
        <h2>Registration</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Contact Information" />
        <button type="submit">Register</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Registration;
