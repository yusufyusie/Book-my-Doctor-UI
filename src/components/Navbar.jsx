import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaVimeoV,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import navMenu from '../utils/NavbarData';
import { logout } from '../redux/user/userSlice';

import Logo from '../assets/doc_logo.jpg';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const logoutUser = () => {
    dispatch(logout);
    localStorage.removeItem('userdata');
    toast.success('Logout successfully!');
    navigate('/');
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <section className="relative md:flex md:flex-col md:justify-between h-screen w-full md:w-64 border-r-2">
      {/* logo */}
      <div className="p-2">
        <img src={Logo} alt="logo" className="w-52 rounded-md hidden md:block" />
      </div>
      {/* mobile menu */}
      <div className="md:hidden absolute top-0 right-0 p-4">
        <button type="button" onClick={() => setIsOpen(!isOpen)} aria-label="Open or close menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* nav menu */}
      <div className={`fixed z-10 inset-0 bg-white transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:inset-auto`}>
        <div className="flex flex-col mt-10 ml-4 gap-3">
          {navMenu.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.path}
              className={({ isActive }) => `text-gray-800 p-1 text-xl uppercase font-bold no-underline${isActive ? 'text-white bg-lime-500' : ''}`}
              onClick={closeMobileMenu}
            >
              {menu.name}
            </NavLink>
          ))}
          <button type="button" onClick={logoutUser} aria-label="Logout">
            <span className="uppercase text-gray-800 font-bold text-xl mt-2">logout</span>
          </button>
        </div>
        <div className="absolute top-0 right-0 p-4 md:hidden">
          <button type="button" onClick={() => setIsOpen(false)} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>
      </div>
      {/* socials */}
      <footer className="absolute bottom-10 left-4 md:static">
        <div className="flex justify-center gap-4">
          <FaTwitter />
          <FaFacebookF />
          <TiSocialGooglePlus />
          <FaVimeoV />
          <FaPinterestP />
        </div>
        <span className="text-xs">&copy; 2024 microverse final capstone</span>
      </footer>
    </section>
  );
};

export default Navbar;