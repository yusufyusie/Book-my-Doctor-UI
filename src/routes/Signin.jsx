import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const navigate = useNavigate(); // Use the navigate hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:3001/login', { 
        user: {
          email, 
          password
        }
      });
      
      if (response.status === 200) {
        // when a user login : it save the token and save the user data in redux store
        // to redirect the user to the doctor page
        if(response.data.token){
          localStorage.setItem('userdata', response.data.token, response.data.user);
        }
        navigate('/doctors'); // Navigate to the doctors page route
        //onSignin(response.data.user, response.data.token); // 
      } else {
        // Handle other response statuses if needed
        alert('Login failed. Please try again later.');
      }
    } catch (error) {
      // Handle other types of errors (e.g., network error)
      console.error(error)
      alert('An unexpected error occurred. Please try again later.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Sign In</button> {/* Add submit button */}
    </form>
  );
};

export default Signin;
