import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Import Home component
import Profile from './Profile'; // Import Profile component
import Login from './Login'; // Import Login component
import SignUp from './SignUp'; // Import SignUp component
import Messages from './Messages'; // Import Messages component

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/messages" element={<Messages />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
