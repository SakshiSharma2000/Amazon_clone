import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../ContextApi/AuthContext';
import PropTypes from 'prop-types';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setToken, setUsername: setAuthUsername } = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      const token = response.data.token;
      setToken(token); 
      setAuthUsername(username);
      console.log('Logged in successfully:', token);
    } catch (error) {
      console.error('Error signing in:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

SignIn.propTypes = {
  setToken: PropTypes.func,
};

export default SignIn;
