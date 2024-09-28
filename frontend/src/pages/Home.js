import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Job Portal</h1>
        <nav className="navbar">
          <Link to="/">Home</Link> 
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main className="main-content">
        <div className="hero-section">
          <h2>Find Your Dream Job</h2>
          <p>Search and apply for jobs that match your skills and career goals. Join us today!</p>
          <Link to="/register">
            <button>Get Started</button>
          </Link>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Job Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
