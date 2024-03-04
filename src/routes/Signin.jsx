import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signinUser } from '../redux/user/userSlice';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInSubmit = async (e) => {
    e.preventDefault();

    const loginUser = {
      email,
      password,
    };

    if (email.length !== 0 && password.length !== 0) {
      await dispatch(signinUser(loginUser));
      toast.success('Welcome back!');
      navigate('/doctors');
    } else {
      toast.error('Please enter your email address and password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center w-full bg-gray-100 py-6 px-6 lg:px-8">
      <div className="mx-auto sm:w-full sm:max-w-md lg:max-w-lg">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign In
          </h2>
          <form className="mt-8 space-y-6" onSubmit={signInSubmit}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
              <div className="mt-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </label>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
              <div className="mt-1">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </label>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-white hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <p className="mt-4 text-center">
          New here?
          {' '}
          <Link to="/sign_up" className="underline text-indigo-500 font-semibold">Click here to sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;