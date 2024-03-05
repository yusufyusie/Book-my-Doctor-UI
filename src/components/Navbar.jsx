import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaVimeoV, FaTwitter, FaFacebookF, FaPinterestP, FaBars, FaTimes } from 'react-icons/fa';
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
    <section className="relative bg-white shadow-md md:flex md:flex-col md:justify-between h-screen w-full md:w-64 border-r-2">
      {/* logo */}
      <div className="p-2 md:hidden flex justify-between items-center">
        <img src={Logo} alt="logo" className="w-20 md:w-52 rounded-md" />
        <button type="button" onClick={() => setIsOpen(!isOpen)} aria-label="Open or close menu" className="text-2xl md:hidden">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className="p-2 hidden md:block">
        <img src={Logo} alt="logo" className="w-52 rounded-md" />
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
          <button type="button" onClick={logoutUser} aria-label="Logout" className="mt-2 p-1 text-xl uppercase font-bold text-gray-800">
            logout
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