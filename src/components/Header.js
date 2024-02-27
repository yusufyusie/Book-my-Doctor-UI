import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
      <ul>
        <li><Link to="#">Home</Link></li>
        <li><Link to="#">Reserve</Link></li>
        <li><Link to="#">My Reservations</Link></li>
        <li><Link to="#">Add Item</Link></li>
        <li><Link to="#">Delete Item</Link></li>
      </ul>
    </nav>
  );

export default Header;