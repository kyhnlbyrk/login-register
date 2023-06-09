import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Input from '../Input';
import Button from '../../atoms/Button';
import Styles from './LoginForm.module.scss';
import { InputControls, LoginFormProps } from './LoginForm.types';

const schema = yup
  .object()
  .shape({
    email: yup.string().email('Geçerli bir e-posta yazmalısın!').required('Bu alan boş bırakılamaz!'),
    password: yup.string().min(6, 'Şifren en az 6 karaterden oluşmalıdır!').required('Bu alan boş bırakılamaz!'),
  })
  .required();

const LoginForm: React.FunctionComponent<LoginFormProps> = props => {
  const { onSubmit, loading } = props;

  const formMethods = useForm<InputControls>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    ...props,
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = formMethods;

  const _onSubmit: SubmitHandler<InputControls> = data => {
    onSubmit(data);
  };

  return (
    <FormProvider {...formMethods}>
      <form className={Styles['wrapper']} onSubmit={handleSubmit(_onSubmit)}>
        <Input id="email" label="E-posta" type="email" message={errors?.email?.message} status={errors?.email ? 'error' : undefined} {...register('email')} />
        <Input id="password" label="Şifre" type="password" message={errors?.password?.message} status={errors?.password ? 'error' : undefined} {...register('password')} />
        <Button disabled={loading} type="submit" block>
          Giriş yap
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
