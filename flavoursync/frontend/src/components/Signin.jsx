// src/components/Signin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../assets/styles/Container.css';

const SignIn = ({ toggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email.');
      return;
    } else {
      setEmailError('');
    }

    // Validate password
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      return;
    } else {
      setPasswordError('');
    }

    try {
      // Send login request to backend
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();

      if (response.ok) {
        setSuccess("Login successful!");
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else {
        setError(data.message || "Error logging in");
      }
    } catch (error) {
      console.error("Error logging in: ", error);
      setError("An error occurred. Please try again.");
    }
  };

  // Function to toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleLogin}>
        <h1>Sign In</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        {emailError && <p className="error-message">{emailError}</p>}

        <div className="password-input-container">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <span className="eye-icon" onClick={toggleShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {passwordError && <p className="error-message">{passwordError}</p>}
        
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <a href="#" onClick={(e) => { e.preventDefault(); handleForgotPassword(); }}>
          Forgot Your Password?
        </a>
        
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
