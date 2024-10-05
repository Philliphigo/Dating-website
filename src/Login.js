import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username);
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <button type="submit" className="button">Login</button>
            </form>
        </div>
    );
};

export default Login;
