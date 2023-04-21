import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Input from '../Input';
import Button from '../../atoms/Button';
import Styles from './LoginForm.module.scss';
import { InputControls } from './LoginForm.types';

const schema = yup
  .object()
  .shape({
    email: yup.string().email('Geçerli bir e-posta yazmalısın!').required('Bu alan boş bırakılamaz!'),
    password: yup.string().min(6, 'Şifren en az 6 karaterden oluşmalıdır!').required('Bu alan boş bırakılamaz!'),
  })
  .required();

const LoginForm: React.FunctionComponent = props => {
  const formMethods = useForm<InputControls>({
    resolver: yupResolver(schema),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const onSubmit: SubmitHandler<InputControls> = async data => {
    /*clearMessages();
   if (isSubmitting) return;
   try {
     const loginResponse = await Login(data);
     const { token } = loginResponse.data;
     const getUserResponse = await GetUser(token);
     login(getUserResponse.data, token);
     if (reload) {
       window.location.reload();
     }
   } catch (err) {
     setError(err.response.data.message || err.response.data.userMessage);
   }*/
  };

  return (
    <FormProvider {...formMethods}>
      <form className={Styles["wrapper"]} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              id="email"
              data-testid="membership-signin-email-input"
              label="E-posta"
              type="email"
              message={errors?.email?.message}
              status={errors?.email ? 'error' : undefined}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              id="password"
              data-testid="membership-signin-password-input"
              label="Şifre"
              type="password"
              message={errors?.password?.message}
              status={errors?.password ? 'error' : undefined}
              {...field}
            />
          )}
        />

        <Button data-testid="membership-signin-submit-button" type="submit" block>
          Giriş yap
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;