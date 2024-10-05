// client/Login.js
import React from 'react';

function Login() {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;