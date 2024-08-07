
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Address: '',
        Email: '',
        MobileNum: '',
        Password: '',
        RoleId: '',
        ManagerId: ''
    });
    const [roles, setRoles] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get('https://localhost:7116/api/role/');
                console.log('Roles data:', response.data); 
                setRoles(response.data);
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };
        fetchRoles();
    }, []);

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
            const response = await axios.post('https://localhost:7116/api/User', formData);

            if (response.status === 201) {
                setMessage('Registration successful');
            }
        } catch (error) {
            setMessage('Registration failed');
        }
    };

    return (
        <div className='registerform'>
            <h1 className='heading'>REGISTER PAGE</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input className='form1' 
                        type="text" 
                        name="FirstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input className='form1' 
                        type="text" 
                        name="LastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input className='form1' 
                        type="text" 
                        name="Address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input className='form1' 
                        type="email" 
                        name="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Mobile Number:</label>
                    <input className='form1' 
                        type="text" 
                        name="MobileNum" 
                        value={formData.mobileNum} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input className='form1' 
                        type="password" 
                        name="Password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                <label>Role: </label>
                    <select className='form1' 
                        name="RoleId" 
                        value={formData.RoleId} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select a role</option>
                        {roles.map((role) => (
                            <option key={role.roleId} value={role.roleId}>{role.roleName}</option>
                        ))}
                    </select>
            
                </div>
                <div>
                    <label>Manager ID:</label>
                    <input className='form1' 
                        type="text" 
                        name="ManagerId" 
                        value={formData.managerId} 
                        onChange={handleChange} 
                    />
                </div>
                <button className='btn' type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;