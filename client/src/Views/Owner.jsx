import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../Components/NavBar';
import { api } from '../Services/api';
import styles from '../Styles/Owner.module.css';
import { GlobalContext } from '../Utils/MainContexts';

const Owner = () => {
  const [data, setData] = useContext(GlobalContext);
  const [ownerData, setOwnerData] = useState({});

  const [add, setAdd] = useState('');
  const history = useHistory();
  const clearData = (e) => {
    e.preventDefault();
    window.sessionStorage.clear();
    setData({});
    history.push('/');
  };

  const addRestaurant = (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      authorization: `bearer ${window.sessionStorage.getItem('token')}`,
    };
    axios
      .post(`${api}/restaurants`, { name: add }, { headers: headers })
      .then((res) => {
        console.log(res.data);
      });
  };

  useEffect(() => {
    axios.get(`${api}/owners/${data.id}`).then((res) => {
      setOwnerData(res.data);
    });
  }, [data]);

  return (
    <>
      <NavBar />
      <div className={styles.ownerContainer}>
        <div className={styles.ownerHeader}>
          <div>
            <h1>Restaurant Owner Dashboard</h1>
          </div>
          <div>
            <button style={{ cursor: 'pointer' }} onClick={(e) => clearData(e)}>
              Log out
            </button>
          </div>
        </div>
        <div className={styles.ownerBody}>
          <div className={styles.ownerSide}>
            <h2>{data.name}</h2>
          </div>
          <div className={styles.ownerMain}>
            <form onSubmit={(e) => addRestaurant(e)} className={styles.new}>
              <input
                type='text'
                name='newRest'
                id=''
                onChange={(e) => setAdd(e.target.value)}
              />
              <input type='submit' value='Add Restaurant' />
            </form>
            <br />
            <div className={styles.ownerTable}>
              <table>
                <th>
                  <td>Restaurant</td>
                  <td>Reviews</td>
                  <td>Pending Reply</td>
                </th>
                <tbody>
                  {ownerData.restaurants?.map((rest) => {
                    return (
                      <tr>
                        <td>{rest.name}</td>
                        <td>{rest.reviews.length}</td>
                        <td>Yes</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Owner;
