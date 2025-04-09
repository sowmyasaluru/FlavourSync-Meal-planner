// src/App.jsx
import React from 'react';
import './assets/styles/App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/container" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/container" element={<Container />} />
      </Routes>
    </div>
  );
}

// Wrapper to provide Router context
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
