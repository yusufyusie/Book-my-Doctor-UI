import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';

const Layout = () => (
  <div className="flex h-screen">
    <Navbar />
    <div className="flex-1 flex flex-col">
      <Header />
      <Outlet />
    </div>
  </div>
);

export default Layout;