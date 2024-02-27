import React from 'react';

const Header = () => (
  <header className="w-full bg-white shadow-md p-6 flex items-center justify-between">
    <nav className="text-gray-800 text-xl font-bold">
      <a href="#" className="mx-2 hover:text-blue-600">Home</a>
      <a href="#" className="mx-2 hover:text-blue-600">About</a>
      <a href="#" className="mx-2 hover:text-blue-600">Contact</a>
    </nav>
  </header>
);

export default Header;