import React from 'react';
import styles from '../Styles/Owner.module.css';

const Owner = () => {
  return (
    <div className={styles.ownerContainer}>
      <div className={styles.ownerHeader}>
        <div>
          <h1>Restaurant Owner Dashboard</h1>
        </div>
        <div>
          <button>Log out</button>
        </div>
      </div>
      <div className={styles.ownerBody}>
        <div className={styles.ownerSide}>
          <h2>Restaurant Name</h2>
          <br />
          <strong>Owner Name</strong>
          <br />
          <strong>Average Rating</strong>
          <br />
          <strong>Total Reviews</strong>
        </div>
        <div className={styles.ownerMain}>
          <div className={styles.ownerTable}>
            <table>
              <th>
                <td>Restaurant</td>
                <td>Reviews</td>
                <td>Pending Reply</td>
              </th>
              <tbody>
                <tr>
                  <td>Dhaka Restaurant</td>
                  <td>20K</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Dhaka Restaurant</td>
                  <td>20K</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Dhaka Restaurant</td>
                  <td>20K</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Dhaka Restaurant</td>
                  <td>20K</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
