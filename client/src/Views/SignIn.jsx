import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { api } from '../Services/api';
import styles from '../Styles/signin.module.css';
import { GlobalContext } from '../Utils/MainContexts';

const SignIn = () => {
  const [data, setData] = useContext(GlobalContext);
  const [regi, setRegi] = useState('owner');

  const history = useHistory();

  const historyCheck = () => {
    if (data.token) {
      history.push('/');
    }
  };

  historyCheck();

  const pageRedirect = () => {
    if (regi === 'owner') {
      history.push('/owner');
    } else {
      history.push('/restaurants');
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (regi === 'owner') {
      axios.post(`${api}/owner_login`, data).then((res) => {
        window.sessionStorage.setItem('token', res.data.token);

        setData(res.data);
        console.log(res.data);
        pageRedirect();
      });
    } else {
      axios.post(`${api}/user_login`, data).then((res) => {
        window.sessionStorage.setItem('token', res.data.token);
        window.sessionStorage.setItem('name', res.data.name);
        setData(res.data);
        pageRedirect();
      });
    }
  };
  console.log(errors);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapLeft}>
        <div className={styles.textBox}>
          <h1>{regi === 'owner' ? 'Owner Login' : 'User Login'}</h1>
        </div>
      </div>
      <NavBar />
      <div className={styles.wrapRight}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.middle}>
            <label>
              <input
                onClick={() => setRegi('owner')}
                type='radio'
                name='radio'
                defaultChecked
              />
              <div className={[styles.frontEnd, styles.box].join(' ')}>
                <span>Owner</span>
              </div>
            </label>
            <label>
              <input
                onClick={() => setRegi('user')}
                type='radio'
                name='radio'
              />
              <div className={[styles.backEnd, styles.box].join(' ')}>
                <span>User</span>
              </div>
            </label>
          </div>
          <input
            type='text'
            placeholder='Username'
            {...register('username', { required: true, maxLength: 100 })}
          />
          <input
            type='text'
            placeholder='Password'
            {...register('password', {
              required: true,
              min: 8,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
            })}
          />

          <input type='submit' />
          <strong style={{ margin: '0 auto' }}>
            Don't have account yet ?{' '}
            <Link style={{ color: 'green' }} to='/signup'>
              Sign Up
            </Link>{' '}
            here
          </strong>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
