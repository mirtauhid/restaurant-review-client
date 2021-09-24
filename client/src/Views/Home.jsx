import React from 'react';
import HomeBtn from '../Components/HomeBtn';
import NavBar from '../Components/NavBar';
import styles from '../Styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <h1>
        Help people <br /> to find good food
      </h1>
      <p>Find restaurant & share your experience</p>
      <br />
      <HomeBtn />
    </div>
  );
};

export default Home;
