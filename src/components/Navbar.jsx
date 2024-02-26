import React from 'react';

import Logo from '../assets/doc_logo.jpg';

const Navbar = () => (
  <section className="border-r-2 h-screen p-2">
    {/* logo */}
    <img src={Logo} alt="logo" className="w-52" />
    {/* nav menu */}
    <div className="flex flex-col mt-10 gap-3">
      <span className="text-gray-800 text-xl font-bold">MODELS</span>
      <span className="text-gray-800 text-xl font-bold">LIFESTYLE</span>
      <span className="text-gray-800 text-xl font-bold">SHOP</span>
      <span className="text-gray-800 text-xl font-bold">TEST DRIVE</span>
    </div>
    {/* socials */}
    <footer className="absolute bottom-10">
      <span>twitter</span>
      <span>facebook</span>
      <span>google+</span>
      <span>vim</span>
      <span>pinterest</span>
    </footer>
  </section>
);

export default Navbar;
