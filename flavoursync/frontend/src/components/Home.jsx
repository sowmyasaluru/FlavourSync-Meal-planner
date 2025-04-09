/*src/components/Home.jsx*/
import React from 'react';
import { Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import '../assets/styles/Home.css';

const Home = () => {
  return (
    <div className="d-flex">
      <Sidebar /> {/* Fixed Sidebar Component */}
      <div className="home-content">
        
        {/* Welcome Section */}
        <section className="full-height-section" id="welcome-section">
          <h1>Welcome to Flavour Sync</h1>
          <p>Discover amazing recipes tailored to what you have and plan meals effortlessly!</p>
        </section>

        {/* Recipe Generator Section */}
        <section className="full-height-section" id="recipe-generator-section">
          <h2>Recipe Generator</h2>
          <p>Get personalized recipes based on your ingredients!</p>

          <div className="button-group">
            <div className="button-with-description">
              <Button variant="primary" href="/Ingredients-to-recipe">What's in your fridge</Button>
              <p className="button-description">Find recipes that match the ingredients you already have.</p>
            </div>
            <div className="button-with-description">
              <Button variant="primary" href="/recipe-search">Recipe Search</Button>
              <p className="button-description">Search for recipes using specific ingredients or cuisines.</p>
            </div>
          </div>
        </section>

        {/* Meal Planner Section */}
        <section className="full-height-section" id="meal-planner-section">
          <h2>Meal Planner</h2>
          <p>Plan your weekly or monthly meals with ease.</p>

          <div className="button-group">
            <div className="button-with-description">
              <Button variant="success" href="/weekly-meal-planner">Weekly Meal Planner</Button>
              <p className="button-description">Organize meals for each day of the week effortlessly.</p>
            </div>
            <div className="button-with-description">
              <Button variant="success" href="/monthly-meal-planner">Monthly Meal Planner</Button>
              <p className="button-description">Plan your meals for the entire month in advance.</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="full-height-section" id="about-section">
          <h2>About Us</h2>
          <p>
            At Flavour Sync, we aim to make meal planning and recipe discovery effortless.
            From ingredient-based recipes to comprehensive meal plans, we’ve got you covered!
          </p>
          <Button variant="info" href="/about">Learn More</Button>
        </section>

        {/* Contact Section */}
        <section className="full-height-section" id="contact-section">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? Reach out to us!</p>
          <Button variant="outline-info" href="/contact">Get in Touch</Button>
        </section>

      </div>
    </div>
  );
};

export default Home;
