import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>Logo</div>
      <div className='navbar-links'>
        <a href='#'>Home</a>
        <a href='#'>TV Shows</a>
        <a href='#'>Movies</a>
        <a href='#'>New & Popular</a>
        <a href='#'>My List</a>
      </div>
      <div className='navbar-profile'>
        <img src='profile-icon.png' alt='Profile' />
      </div>
    </div>
  );
};

export default Navbar;
 