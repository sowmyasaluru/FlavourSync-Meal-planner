// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUtensils, FaCalendarAlt, FaInfoCircle, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import '../assets/styles/Sidebar.css';

function Sidebar() {
    const [isRecipeDropdownOpen, setRecipeDropdownOpen] = useState(false);
    const [isMealDropdownOpen, setMealDropdownOpen] = useState(false);

    const toggleRecipeDropdown = () => setRecipeDropdownOpen(!isRecipeDropdownOpen);
    const toggleMealDropdown = () => setMealDropdownOpen(!isMealDropdownOpen);

    return (
        <div className="sidebar">
            <h2>FlavourSync</h2>
            <Link className="nav-link" to="/home">
                <FaHome className="icon" /> Home
            </Link>

            <div className="nav-item">
                <div className="nav-link" onClick={toggleRecipeDropdown}>
                    <FaUtensils className="icon" /> Recipe Generator
                </div>
                {isRecipeDropdownOpen && (
                    <div className="dropdown">
                        <Link to="/meal-to-recipe" className="dropdown-item">Meal to Recipe</Link>
                        <Link to="/ingredients-to-recipe" className="dropdown-item">Ingredients to Recipe</Link>
                    </div>
                )}
            </div>

            <div className="nav-item">
                <div className="nav-link" onClick={toggleMealDropdown}>
                    <FaCalendarAlt className="icon" /> Meal Planner
                </div>
                {isMealDropdownOpen && (
                    <div className="dropdown">
                        <Link to="/weekly-meal-planner" className="dropdown-item">Weekly Meal Planner</Link>
                        <Link to="/monthly-meal-planner" className="dropdown-item">Monthly Meal Planner</Link>
                    </div>
                )}
            </div>

            <Link className="nav-link" to="/about">
                <FaInfoCircle className="icon" /> About
            </Link>
            <Link className="nav-link" to="/contact">
                <FaEnvelope className="icon" /> Contact
            </Link>

            {/* Profile Section at the Bottom */}
            <div className="profile-section">
                <FaUserCircle className="profile-icon" />
                <div className="profile-info">
                    <p className="username">John Doe</p>
                    <Link to="/profile" className="profile-link">Profile</Link>
                    <Link to="/container" className="profile-link">Logout</Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
