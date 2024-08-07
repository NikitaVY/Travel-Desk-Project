import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import "./Sidebar.css";

const AdminDashboard = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    employeeId: '',
    employeeDept: '',
    role: '',
    managerName: ''
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUserDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users', newUser);
      setUserDetails([...userDetails, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setUserDetails(userDetails.filter(user => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="main-content">
        
      <Sidebar />
      <div>
      <header>
          <h2>Welcome Admin User</h2>
          <Link to="/logout">Logout</Link>
        </header>
        <h3>Added User Details</h3>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Employee ID</th>
            <th>Department</th>
            <th>Role</th>
            <th>Manager</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.employeeId}</td>
              <td>{user.employeeDept}</td>
              <td>{user.role}</td>
              <td>{user.managerName}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
        </div>
      
    </div>
  );
};

export default AdminDashboard;
