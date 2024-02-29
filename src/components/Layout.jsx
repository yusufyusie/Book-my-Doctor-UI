import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="flex">
    <Navbar />
    <div className="w-full">
      <Outlet />
    </div>
  </div>
);

export default Layout;
