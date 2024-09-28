import React from 'react';

const Dashboard = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Dashboard</h1>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
          <a href="/jobs">Manage Jobs</a>
        </nav>
      </header>
      <main>
        <h2>Your Dashboard</h2>
        <p>Welcome back! Manage your profile, view your job applications, and more.</p>
        <div className="dashboard-links">
          <a href="/profile">Profile</a>
          <a href="/applications">My Applications</a>
          <a href="/jobs">Manage Job Listings</a>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Job Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
