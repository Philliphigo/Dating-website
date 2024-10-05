// client/Home.js
import React from 'react';
import './style.css'; // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Your Perfect Match!</h1>
        <p>Join now to find meaningful connections.</p>
        <div className="action-buttons">
          <a href="/login" className="button">Login</a>
          <a href="/signup" className="button">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Home;