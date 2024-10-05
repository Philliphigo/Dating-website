import React, { useState } from 'react';

// Simulated users data for matching (You can replace this with your actual data)
const users = [
    { id: 1, interests: ['music', 'travel'], location: 'CityA' },
    { id: 2, interests: ['sports', 'travel'], location: 'CityA' },
    { id: 3, interests: ['music', 'art'], location: 'CityB' }
];

// Function to match users based on interests and location
const matchUsers = (currentUser, users) => {
    return users.map(user => {
        let score = 0;

        // Scoring logic based on location
        if (currentUser.location === user.location) {
            score += 10; // Higher score for same location
        }

        // Count common interests
        const currentInterests = currentUser.interests.split(',').map(interest => interest.trim());
        const commonInterests = currentInterests.filter(interest => user.interests.includes(interest));
        score += commonInterests.length; // Score based on number of common interests

        return { user, score };
    }).sort((a, b) => b.score - a.score); // Sort matches by score
};

const Profile = () => {
    const [profilePicture, setProfilePicture] = useState(null);
    const [privacy, setPrivacy] = useState('public');
    const [interests, setInterests] = useState(''); // State for interests
    const [location, setLocation] = useState(''); // State for location
    const [matches, setMatches] = useState([]); // State to store matches

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file)); // Preview the image
        }
    };

    const handlePrivacyChange = (event) => {
        setPrivacy(event.target.value); // Update privacy setting
    };

    const handleInterestsChange = (event) => {
        setInterests(event.target.value); // Capture interests input
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value); // Capture location input
    };

    const handleMatch = () => {
        const currentUser = { id: 4, interests: interests, location: location }; // Simulated current user
        const matchedUsers = matchUsers(currentUser, users); // Get matches
        setMatches(matchedUsers); // Update state with matches
        console.log(matchedUsers); // Display matches in the console
    };

    return (
        <div className="profile-container">
            <h1>Your Profile</h1>
            {profilePicture && <img src={profilePicture} alt="Profile" style={{ width: '100%', borderRadius: '5px' }} />}
            <input type="file" accept="image/*" onChange={handlePictureChange} />
            
            <h2>Privacy Settings</h2>
            <label>
                <input type="radio" value="public" checked={privacy === 'public'} onChange={handlePrivacyChange} /> Public
            </label>
            <label>
                <input type="radio" value="private" checked={privacy === 'private'} onChange={handlePrivacyChange} /> Private
            </label>

            <h2>Your Interests</h2>
            <input type="text" value={interests} onChange={handleInterestsChange} placeholder="Enter your interests (comma separated)" />
            
            <h2>Your Location</h2>
            <input type="text" value={location} onChange={handleLocationChange} placeholder="Enter your location" />

            <button onClick={handleMatch}>Find Matches</button>

            <h2>Matches</h2>
            {matches.length > 0 ? (
                <ul>
                    {matches.map((match, index) => (
                        <li key={index}>
                            User ID: {match.user.id}, Score: {match.score}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No matches found yet.</p>
            )}
        </div>
    );
};

export default Profile;