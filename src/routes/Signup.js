import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/user/userSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirm, setPassConfirm] = useState('');

  const signUpSubmit = async (e) => {
    e.preventDefault();
    const addUser = {
      id: uuid(),
      name,
      email,
      password,
      password_confirmation: passConfirm,
    };
    // eslint-disable-next-line max-len
    if (name && email && password && passConfirm) {
      await dispatch(signupUser(addUser));
      setName('');
      setEmail('');
      setPassword('');
      navigate('/');
    } else {
      toast.error('Please enter a name or email address');
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center w-full bg-gray-100 py-6 px-6 lg:px-8">
      <div className="mx-auto w-11/12 md:w-1/2">
        <div className="bg-white py-8 px-4 shadow rounded-xl sm-px-10">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up
          </h2>
          <form className="mt-8 space-y-6" onSubmit={signUpSubmit}>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full name
              <div className="mt-1">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </label>
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
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm password
              <div className="mt-1">
                <input
                  type="password"
                  value={passConfirm}
                  onChange={(e) => setPassConfirm(e.target.value)}
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
                Sign up
              </button>
            </div>
          </form>
        </div>
        <p className="mt-4 text-center">
          have an account?
          {' '}
          <Link to="/" className="underline text-indigo-500 font-semibold">Click here to log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
