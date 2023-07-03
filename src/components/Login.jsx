import React from 'react';
import './styles/Login.css';

const Login = () => {
  return (
    <div className="container">
      <form className="form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/registration">Register</a></p>
      </form>
    </div>
  );
};

export default Login;
