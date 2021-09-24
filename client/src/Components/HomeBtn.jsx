import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HomeBtn.css';

const HomeBtn = () => {
  return (
    <div className='wrap'>
      <button className='button'>
        <Link to='/signup'>Add Restaurant or Share Experience</Link>
      </button>
    </div>
  );
};

export default HomeBtn;
