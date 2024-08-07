// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import HRTravelAdminDashboard from './components/HRTravelAdminDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/login/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/login/hr-travel-admin-dashboard" element={<HRTravelAdminDashboard />} />
          <Route path="/login/manager-dashboard" element={<ManagerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
