import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';

function Layout() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="pt-24 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
