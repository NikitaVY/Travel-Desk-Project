import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({ Email: '', Password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost:7116/login', formData);

            if (response.status === 200) {
                setMessage('Login successful');
            }
        } catch (error) {
            setMessage('Login failed');
        }
    };

    return (
        <div className='loginform'>
            <h1 className='heading'>LOGIN PAGE</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input className='form2'
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input className='form2'
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button className='btn1' type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;