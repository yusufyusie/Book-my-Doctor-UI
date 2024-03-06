 import React, { useState } from 'react';
 import { NavLink, useNavigate } from 'react-router-dom';
 import clsx from 'clsx';
 import { FaBars, FaTimes } from 'react-icons/fa';
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

 return (
     <section className="bg-white lg:h-screen lg:border-r-2 lg:w-60">
       <div className="flex flex-col">
         {/* logo */}
         <div className="p-3 flex items-center justify-between">
           <img src={Logo} alt="logo" className="w-20 lg:w-52 rounded-md" />
           {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
           <button
             type="button"
             onClick={() => setIsOpen(true)}
             className="text-2xl lg:hidden"
           >
             <FaBars />
           </button>
         </div>
         {/* nav menu */}
         <div className="hidden lg:flex flex-col mt-10 ml-4 gap-3">
           {navMenu.map((menu) => (
             <NavLink
               key={menu.id}
               to={menu.path}
               end
               className={({ isActive }) => text-gray-800 p-1 text-xl uppercase font-bold no-underline${isActive ? 'text-white bg-lime-500' : ''}}
             >
               {menu.name}
             </NavLink>
           ))}
           <button type="button" onClick={logoutUser}>

 <span className="uppercase text-gray-800 font-bold text-xl mt-2">logout</span>
           </button>
         </div>
         {/* mobile nav menu */}
         <div className={clsx(' fixed h-full w-screen lg:hidden z-50 bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ',
           isOpen && 'translate-x-0')}
         >
           <div className="bg-slate-300 h-screen flex flex-col z-50 pt-10">
             <div className="flex justify-end pb-5">
               <FaTimes onClick={() => setIsOpen(false)} className="text-4xl" />
             </div>
             {navMenu.map((menu) => (
               <NavLink
                 key={menu.id}
                 to={menu.path}
                 onClick={() => setIsOpen(false)}
                 end
                 className={({ isActive }) => text-gray-800 p-1 text-xl uppercase font-bold no-underline${isActive ? 'text-white bg-lime-500' : ''}}
               >
                 {menu.name}
               </NavLink>
             ))}
             <button type="button" onClick={logoutUser}>
               <span className="uppercase text-gray-800 font-bold text-xl mt-2">logout</span>
             </button>
           </div>
         </div>
       </div>
</section>
   );
 };
 
 export default Navbar;
