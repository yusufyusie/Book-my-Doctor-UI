import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Cookies from 'js-cookie';
import { setToken } from '../redux/auth/authSlice';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/login',
        {
          email,
        },
      );
      if (response.status === 200) {
        // Save the token in redux store
        dispatch(setToken(response.data));

        // Save the token in Cookies
        Cookies.set('token', response.data.token, { expires: 7, secure: true });
        Cookies.set('email', response.data.email, {
          expires: 7,
          secure: true,
        });

        setSuccessMessage(
          'Success! Redirecting to home page...',
        );
        setEmail('');
        setTimeout(() => {
          setSuccessMessage('');
          navigate('/');
        }, 2000);
      } else {
        // Handle other status codes if needed
        setErrorMessage(`Sign-in failed with status: ${response.status}`);
      }
    } catch (error) {
      setErrorMessage(`Sign-in failed: ${error.message}`);
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full">
      <h1 className="text-3xl font-bold">Sign In</h1>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <label
        htmlFor="email"
        className="flex flex-col gap-4"
      >
        Email:
        <input
          className="p-2 rounded-md border border-gray-300"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button
        className="bg-green-500 py-2 px-4 rounded-md hover:bg-green-600"
        type="button"
        onClick={handleSignIn}
      >
        Sign In
      </button>
    </div>
  );
};

export default Signin;
