import React, { useState } from 'react';

const Profile = () => {
    const [profilePicture, setProfilePicture] = useState(null);
    const [privacy, setPrivacy] = useState('public'); // Default privacy setting

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file)); // Preview the image
        }
    };

    const handlePrivacyChange = (event) => {
        setPrivacy(event.target.value);
    };

    return (
        <div className="profile-container">
            <h1>Your Profile</h1>

            {/* Profile Picture Upload */}
            <div className="profile-picture">
                {profilePicture ? (
                    <img src={profilePicture} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                ) : (
                    <p>No profile picture uploaded.</p>
                )}
                <input type="file" accept="image/*" onChange={handlePictureChange} />
            </div>

            {/* Privacy Settings */}
            <div className="privacy-settings">
                <h2>Privacy Settings</h2>
                <label>
                    <input
                        type="radio"
                        value="public"
                        checked={privacy === 'public'}
                        onChange={handlePrivacyChange}
                    />
                    Public
                </label>
                <label>
                    <input
                        type="radio"
                        value="private"
                        checked={privacy === 'private'}
                        onChange={handlePrivacyChange}
                    />
                    Private
                </label>
                <p>Current setting: {privacy}</p>
            </div>
        </div>
    );
};

export default Profile;
