import React from 'react';
import Signup from './Signup';
import Loginform from './Loginform';
import './App.css'; // Import the CSS file here

const LoginPage = () => {
  return (
    <div className="login-page"> 
      <h1>Sign Up</h1>
      <Signup />

      <h1>Log In</h1>
      <Loginform />
    </div>
  );
};

export default LoginPage;