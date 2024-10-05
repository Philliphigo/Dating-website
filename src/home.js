// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Dating App</h1>
            <p>Connect with people around you!</p>
            <Link to="/login" className="button">Log In</Link>
            {/* Removed the Sign Up button from here */}
        </div>
    );
};

export default Home;
