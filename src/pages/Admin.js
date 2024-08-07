import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://api.example.com/admin/login', { email, password });
      if (response.data.isAuthenticated) {
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Error logging in');
    }
  };

  return (
    <div className='adminform'>
      <h1 className='heading'>ADMIN LOGIN</h1>
      <div>
        <label>Email: </label>
        <input className='form3'
        type="email"
        name="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div>
        <label>Password: </label>
        <input className='form3'
        type="password"
        name="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      
      <button className='btn2' onClick={handleLogin} >Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Admin;
