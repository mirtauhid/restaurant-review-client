import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

const NavBar = () => {
  return (
    <>
      <input type='checkbox' id='menuTrigger' />
      <nav className='menu'>
        <label htmlFor='menuTrigger' className='trigger'>
          <div className='line' />
          <div className='line' />
          <div className='line' />
        </label>
        <ul className='links'>
          <li className='link'>
            <Link to='/'>Home</Link>
          </li>
          <li className='link'>
            <Link to='/restaurants'>Restaurants</Link>
          </li>
          <li className='link'>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li className='link'>
            <Link to='/signin'>Sign In</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
