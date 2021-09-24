import React from 'react';
import NavBar from '../Components/NavBar';
import RateCard from '../Components/RateCard';
import styles from '../Styles/Restaurant.module.css';

const Restaurant = () => {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <h1>Restaurant Name</h1>
            <strong>Owner Name</strong>
          </div>
          <div className={styles.headRight}>
            <div className={styles.rater}>
              <div className={styles.rate}>
                <input type='radio' id='star5' name='rate' defaultValue={5} />
                <label htmlFor='star5' title='text'>
                  5 stars
                </label>
                <input type='radio' id='star4' name='rate' defaultValue={4} />
                <label htmlFor='star4' title='text'>
                  4 stars
                </label>
                <input type='radio' id='star3' name='rate' defaultValue={3} />
                <label htmlFor='star3' title='text'>
                  3 stars
                </label>
                <input type='radio' id='star2' name='rate' defaultValue={2} />
                <label htmlFor='star2' title='text'>
                  2 stars
                </label>
                <input type='radio' id='star1' name='rate' defaultValue={1} />
                <label htmlFor='star1' title='text'>
                  1 star
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.mainLeft}>
            <RateCard />
          </div>
          <div className={styles.mainRight}>
            <div className={styles.best}>
              <strong>Highest Rating</strong>
              <small>Comment</small>
            </div>
            <div className={styles.worst}>
              <strong>Lowest Rating</strong>
              <small>Comment</small>
            </div>
            <div className={styles.last}>
              <strong>Last Rating</strong>
              <small>Comment</small>
              <small>Reply</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
