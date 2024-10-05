// src/Profile.js
import React, { useState } from 'react';

const Profile = () => {
    const [image, setImage] = useState(null);
    const [privacy, setPrivacy] = useState('public'); // Default to public

    const handleImageUpload = (e) => {
        setImage(URL.createObjectURL(e.target.files[0])); // Preview the uploaded image
    };

    return (
        <div className="profile-container">
            <h1>Your Profile</h1>
            {image && <img src={image} alt="Profile" style={{ width: '100%', height: 'auto' }} />}
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <label>
                Privacy Settings:
                <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
            </label>
            {/* Add more profile fields here */}
        </div>
    );
};

export default Profile;
