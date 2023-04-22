import React, { useState } from 'react';
import { register } from '../../../../services';
import RegisterForm, { InputControls } from '../../RegisterForm';

const RegisterFormManager: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>();

  const onSubmit = async (val: InputControls) => {
    setLoading(true);
    try {
      await register(val);
      alert('Üye oldunuz şimdi giriş yapabilirsiniz!');
    } catch (err: any) {
      alert(err.response.data.error);
    }
    setLoading(false);
  };
  return <RegisterForm onSubmit={onSubmit} loading={loading} />;
};

export default RegisterFormManager;
