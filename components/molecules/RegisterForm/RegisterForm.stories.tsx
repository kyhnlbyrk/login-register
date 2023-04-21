import React from 'react';
import RegisterForm from './RegisterForm';

export default {
  title: 'Molecules/RegisterForm',
  component: RegisterForm,
};

export const Default = () => {
  return (
    <div style={{ maxWidth: '1140px', margin: 'auto' }}>
      <RegisterForm />
    </div>
  );
};
