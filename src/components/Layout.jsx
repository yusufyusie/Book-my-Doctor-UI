import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="flex flex-row">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
