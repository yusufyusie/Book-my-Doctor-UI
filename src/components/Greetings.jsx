import React from 'react';

const Greetings = () => {
  const user = JSON.parse(localStorage.getItem('token'));

  return (
    <div className="absolute right-10 top-2">
      <div className="border-2 p-2 rounded-3xl shadow-lg bg-slate-100">
        <h3 className="text-slate-800 font-semibold">{`👋 Hello ${user.name}`}</h3>
      </div>
    </div>
  );
};

export default Greetings;
