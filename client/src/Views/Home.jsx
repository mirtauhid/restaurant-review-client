import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to='/signup'>SignUp</Link>
      <br />
      <Link to='/signin'>SignIn</Link>
    </div>
  );
};

export default Home;
