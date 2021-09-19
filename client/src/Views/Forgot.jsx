import React from 'react';
import { useForm } from 'react-hook-form';

const Forgot = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='Email'
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />

      <input type='submit' />
    </form>
  );
};

export default Forgot;
