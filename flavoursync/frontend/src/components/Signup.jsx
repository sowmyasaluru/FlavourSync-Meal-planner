// src/components/Signup.jsx
import React, { useState } from 'react';
// import { validateEmail } from '../utils/validationUtils'; // Only import if used
import '../assets/styles/Container.css';

const SignUp = ({ toggle }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Email Validation (only if validateEmail is needed)
        // if (!validateEmail(email)) {
        //     setError('Please enter a valid email.');
        //     return;
        // }

        // Password and Confirm Password Validation
        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: name, email, password })
            });
            const data = await response.json();

            if (response.ok) {
                setSuccess('User registered successfully');
                setTimeout(() => {
                    toggle(); // Switch to Sign In view
                }, 1000);
            } else {
                setError(data.message || "An error occurred. Please try again.");
            }
        } catch (error) {
            console.error("Error registering:", error);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="form-container sign-up">
            <form onSubmit={handleRegister}>
                <h1>Create Account</h1>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                />
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default SignUp;
