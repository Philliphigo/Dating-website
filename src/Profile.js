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
            <div className="profile-picture">
                {profilePicture ? (
                    <img src={profilePicture} alt="Profile" width="150" height="150" />
                ) : (
                    <p>No profile picture uploaded</p>
                )}
                <input type="file" accept="image/*" onChange={handlePictureChange} />
            </div>
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
            </div>
        </div>
    );
};

export default Profile;