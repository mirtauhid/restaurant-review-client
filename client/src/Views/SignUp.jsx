import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { api } from '../Services/api';
import styles from '../Styles/signup.module.css';

const SignUp = () => {
  const [regi, setRegi] = useState('owner');
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (regi === 'owner') {
      axios.post(`${api}/owners`, data).then((res) => {
        if (res.data) {
          history.push('/signin');
        }
      });
    } else {
      axios.post(`${api}/users`, data).then((res) => {
        if (res.data) {
          history.push('/signin');
        }
      });
    }
  };
  console.log(errors);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapLeft}>
        <div className={styles.textBox}>
          <h1>
            {regi === 'owner' ? 'Owner Registration' : 'User Registration'}
          </h1>
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
            placeholder='Name'
            {...register('name', { required: true, maxLength: 80 })}
          />
          <input
            type='text'
            placeholder='Username'
            {...register('username', { required: true, maxLength: 100 })}
          />
          <input
            type='text'
            placeholder='Email'
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type='password'
            placeholder='Password'
            {...register('password', {
              required: true,
              min: 8,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
            })}
          />

          <input type='submit' />
          <div style={{ margin: '0 auto' }}>
            <strong style={{ margin: '0 auto' }}>
              Already have account ?{' '}
              <Link style={{ color: 'green' }} to='/signin'>
                Sign In
              </Link>{' '}
              here
            </strong>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
