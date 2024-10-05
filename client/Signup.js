// client/Signup.js
import React from 'react';

function Signup() {
  return (
    <div>
      <h2>Signup Page</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;