import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  // eslint-disable-next-line no-unused-vars
  FaVimeoV, FaTwitter, FaFacebookF, FaPinterestP, FaBars, FaTimes,
} from 'react-icons/fa';
// import { TiSocialGooglePlus } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import navMenu from '../utils/NavbarData';
import { logout } from '../redux/user/userSlice';

import Logo from '../assets/doc_logo.jpg';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  console.log(navigate);
  const logoutUser = () => {
    dispatch(logout);
    localStorage.removeItem('userdata');
    toast.success('Logout successfully!');
    navigate('/');
  };

  /* const closeMobileMenu = () => {
    setIsOpen(false);
  }; */

  return (
    <section className="bg-white lg:h-screen lg:border-r-2 lg:w-80">
      <div className="relative flex flex-col">
        {/* logo */}
        <div className="p-3 z-50 flex items-center justify-between">
          <img src={Logo} alt="logo" className="w-20 md:w-52 rounded-md" />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open or close menu"
            className="text-2xl md:hidden"
          >
            {isOpen ? <FaTimes /> : <FaBars /> }
          </button>
        </div>
        {/* nav menu */}
        <div className="md:flex hidden flex-col mt-10 ml-4 gap-3">
          {navMenu.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.path}
              className={({ isActive }) => `text-gray-800 p-1 text-xl uppercase font-bold no-underline${isActive ? 'text-white bg-lime-500' : ''}`}
            >
              {menu.name}
            </NavLink>
          ))}
          {/* eslint-disable-next-line no-undef */}
          <button type="button" onClick={logoutUser}>
            <span className="uppercase text-gray-800 font-bold text-xl mt-2">logout</span>
          </button>
        </div>
        {/* mobile nav menu */}
        <div className={`md:hidden bg-white fixed z-50 w-full mt-20 h-screen top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${isOpen ? 'left-0' : 'left-[-100%]'}`}
        >
          <div className="flex flex-col -mt-10 ml-4 gap-3">
            {navMenu.map((menu) => (
              <NavLink
                key={menu.id}
                to={menu.path}
                className={({ isActive }) => `text-gray-800 p-1 text-xl uppercase font-bold no-underline${isActive ? 'text-white bg-lime-500' : ''}`}
              >
                {menu.name}
              </NavLink>
            ))}
            {/* eslint-disable-next-line no-undef */}
            <button type="button" onClick={logoutUser}>
              <span className="uppercase text-gray-800 font-bold text-xl mt-2">logout</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
