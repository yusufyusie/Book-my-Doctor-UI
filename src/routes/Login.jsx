import React, { useState } from 'react';
import Signin from './Signin';
import Signup from './Signup';

const LoginPage = () => {
  const [showForm, setShowForm] = useState(null);

  const handleSignin = () => {
    setShowForm('signin');
  };

  const handleSignup = () => {
    setShowForm('signup');
  };

  return (
    <div>
      <div>
        <button onClick={handleSignin}>Sign In</button>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
      <div>
        {showForm === 'signin' && <Signin />}
        {showForm === 'signup' && <Signup />}
      </div>
    </div>
  );
};

export default LoginPage;
