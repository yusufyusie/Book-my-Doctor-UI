import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  FaVimeoV,
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaPinterestP,
} from 'react-icons/fa';

import Logo from '../assets/doc_logo.jpg';

function Navbar() {
  return (
    <section className="border-r-2 h-screen p-2">
      {/* logo */}
      <img src={Logo} alt="logo" className="w-52" />
      {/* nav menu */}
      <div className="flex flex-col mt-10 gap-3">
        <span className="text-gray-800 text-xl font-bold">MODELS</span>
        <span className="text-gray-800 text-xl font-bold">LIFESTYLE</span>
        <NavLink to="/new-appointment">
          <span className="text-gray-800 text-xl font-bold">Appointment</span>
        </NavLink>
        <span className="text-gray-800 text-xl font-bold">TEST DRIVE</span>
      </div>
      {/* socials */}
      <footer className="absolute bottom-10">
        <div className="flex justify-center gap-4">
          <FaTwitter />
          <FaFacebookF />
          <FaGooglePlusG />
          <FaVimeoV />
          <FaPinterestP />
        </div>
        <span className="text-xs">copyright 2024 microverse final capstone</span>
      </footer>
    </section>
  );
}

export default Navbar;
