import React from 'react';
import {
  FaVimeoV,
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaPinterestP,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/doc_logo.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleAddDoctor = () => {
    navigate('/add-doctor'); // Navigate to the doctor form route
  };

  const handlelogout= () =>{
    localStorage.removeItem('userdata');
    navigate ('/') // when implement redux deletes the user data from the store
  }
  return (
  <section className="border-r-2 h-screen p-2">
    <img src={Logo} alt="logo" className="w-52" />
  
    <div className="flex flex-col mt-10 gap-3">
      <span className="text-gray-800 text-xl font-bold"onClick={() => navigate('/doctor-list')}> DOCTORS</span>
      <span className="text-gray-800 text-xl font-bold" onClick={() => navigate('/add-doctor')}>Add doctors</span>
      <span className="text-gray-800 text-xl font-bold">SHOP</span>
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
      <button onClick={handlelogout}>logout</button>
      <span className="text-xs">copyright 2024 microverse final capstone</span>
    </footer>
  </section>
);
}

export default Navbar;
