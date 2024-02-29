import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="flex">
    <Navbar />
    <div className="w-10/12">
      <Outlet />
    </div>
  </div>
);

export default Layout;
