import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Email'
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
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
      <Link to='/forgot'>Forgot Password</Link>
    </div>
  );
};

export default SignIn;
