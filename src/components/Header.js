import React from 'react';

const Header = () => (
  <header className="w-full bg-white shadow-md p-6 flex items-center justify-between">
    <nav className="text-gray-800 text-xl font-bold">
      <a href="#" className="mx-2 hover:text-blue-600">Home</a>
      <a href="#" className="mx-2 hover:text-blue-600">Reserve</a>
      <a href="#" className="mx-2 hover:text-blue-600">My Reservations</a>
      <a href="#" className="mx-2 hover:text-blue-600">Add Item</a>
      <a href="#" className="mx-2 hover:text-blue-600">Delete Item</a>
    </nav>
  </header>
);

export default Header;