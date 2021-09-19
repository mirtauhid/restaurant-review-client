import React from 'react';
import { Link } from 'react-router-dom';

const Restaurants = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/restaurant/1'>Restaurant 1</Link>
        </li>
        <li>
          <Link to='/restaurant/2'>Restaurant 2</Link>
        </li>
        <li>
          <Link to='/restaurant/3'>Restaurant 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Restaurants;
