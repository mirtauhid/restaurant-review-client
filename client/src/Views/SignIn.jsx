import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import NavBar from '../Components/NavBar';
import styles from '../Styles/signin.module.css';

const SignIn = () => {
  const [regi, setRegi] = useState('owner');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
            {...register('Username', { required: true, maxLength: 100 })}
          />
          <input
            type='text'
            placeholder='Password'
            {...register('Password', {
              required: true,
              min: 8,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
            })}
          />

          <input type='submit' />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
