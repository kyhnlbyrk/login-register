import React from 'react';
import LoginForm from './LoginForm';

export default {
  title: 'Molecules/LoginForm',
  component: LoginForm,
};

export const Default = () => {
  return (
    <div style={{ maxWidth: '1140px', margin: 'auto' }}>
      <LoginForm onSubmit={val => console.log('val = ', val)} />
    </div>
  );
};
