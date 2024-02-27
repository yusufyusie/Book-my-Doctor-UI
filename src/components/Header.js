import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
      <div className="flex justify-between items-center">
        <div>
          <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">Brand</a>
        </div>
      </div>

      <div className="md:flex items-center">
        <div className="flex flex-col md:flex-row md:mx-6">
          <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" to="#">Home</Link>
          <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" to="#">Reserve</Link>
          <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" to="#">My Reservations</Link>
          <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" to="#">Add Item</Link>
          <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" to="#">Delete Item</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;