import React from 'react';
import './Dashboard.css';  // Importing the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>

      <div className="dashboard-content">
        <div className="user-info">
          <div className="avatar-container">
            <img
              src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
              alt="User Avatar"
              className="avatar-img"
            />
          </div>
          <h2>Welcome to the Dashboard</h2>
          <p className="user-greeting">Hello,  Here's your personalized space.</p>
        </div>
        
       
      </div>
    </div>
  );
};

export default Dashboard;
