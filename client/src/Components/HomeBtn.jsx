import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HomeBtn.css';

const HomeBtn = (props) => {
  return (
    <div className='wrap'>
      <button className='button'>
        <Link to={props.address}>{props.text}</Link>
      </button>
    </div>
  );
};

export default HomeBtn;
