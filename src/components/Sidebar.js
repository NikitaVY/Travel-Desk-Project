// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/create-user">Create New User</Link></li>
        <li><Link to="/assign-role">Assign Role</Link></li>
        <li><Link to="/travel-requests">Travel Requests</Link></li>
        <li><Link to="/pending-requests">Pending Requests</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
