import React, { useState } from 'react';
import LoginForm, { InputControls } from '../../LoginForm';
import { login } from '../../../../services';

const LoginFormManager: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>();

  const onSubmit = async (val: InputControls) => {
    setLoading(true);
    try {
      const { data } = await login(val);
      alert(`${data.name} olarak giriş yaptınız!`);
    } catch (err: any) {
      alert(err.response.data.error);
    }
    setLoading(false);
  };
  return <LoginForm onSubmit={onSubmit} loading={loading} />;
};

export default LoginFormManager;
