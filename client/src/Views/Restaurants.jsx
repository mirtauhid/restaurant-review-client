import React from 'react';
import NavBar from '../Components/NavBar';
import RestCard from '../Components/RestCard';

const Restaurants = () => {
  return (
    <div style={{ backgroundColor: '#eee', padding: '30px' }}>
      <NavBar />
      <ul>
        <li>
          <RestCard></RestCard>
        </li>
        <br />
        <li>
          <RestCard></RestCard>
        </li>
        <br />
        <li>
          <RestCard></RestCard>
        </li>
        <br />
        <li>
          <RestCard></RestCard>
        </li>
        <li>
          <RestCard></RestCard>
        </li>
      </ul>
    </div>
  );
};

export default Restaurants;
