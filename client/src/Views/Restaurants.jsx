import axios from 'axios';
import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import RestCard from '../Components/RestCard';
import { api } from '../Services/api';

const Restaurants = () => {
  const [rest, setRest] = useState([]);
  axios.get(`/${api}/restaurants`).then((res) => {
    setRest(res.data);
  });

  return (
    <div style={{ backgroundColor: '#eee', padding: '30px' }}>
      <NavBar />
      <ul>
        {rest.map((restData) => {
          return (
            <li>
              <RestCard data={restData}></RestCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Restaurants;
