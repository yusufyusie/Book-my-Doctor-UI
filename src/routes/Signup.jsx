import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:3001/signup', {
        user: {
          name,
          email,
          password,
          password_confirmation
        }
      });
      // Assuming the backend returns the user data and token upon successful signup
     // onSignup(response.data.user, response.data.token);
     if (response.status === 200) {
      alert('Signup successful. Please sign in.');
      navigate('/');
     }

    } catch (error) {
      // Handle signup failure (e.g., display error message)
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 422) {
          alert('Validation failed. Please check your input.');
        } else {
          alert('Signup failed. Please try again later.');
        }
      }
      navigate('/');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome new here : Sign Up</h2>
      <div>
        <label>name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>password_confirmation:</label>
        <input type="password" value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
