import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md p-6 flex items-center justify-between z-50">
      <nav className="text-gray-800 text-xl font-bold">
        <button type="button" className="mx-2 hover:text-blue-600">Home</button>
        <button type="button" className="mx-2 hover:text-blue-600">About</button>
        <button type="button" className="mx-2 hover:text-blue-600">Contact</button>
      </nav>
    </header>
  );
}

export default Header;
