import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Input from '../Input';
import Button from '../../atoms/Button';
import Styles from './RegisterForm.module.scss';
import { InputControls, RegisterFormProps } from './RegisterForm.types';

const schema = yup
  .object()
  .shape({
    name: yup.string().required('Bu alan boş bırakılamaz!'),
    email: yup.string().email('Geçerli bir e-posta yazmalısın!').required('Bu alan boş bırakılamaz!'),
    password: yup.string().min(6, 'Şifren en az 6 karaterden oluşmalıdır!').required('Bu alan boş bırakılamaz!'),
  })
  .required();

const RegisterForm: React.FunctionComponent<RegisterFormProps> = props => {
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
        <Input
          placeholder="İsim Soyisim giriniz"
          id="name"
          label="Adınız Soyadınız"
          message={errors?.name?.message}
          status={errors?.name ? 'error' : undefined}
          {...register('name')}
        />
        <Input
          placeholder="E-posta adresinizi giriniz"
          id="email"
          label="E-posta Adresiniz"
          type="email"
          message={errors?.email?.message}
          status={errors?.email ? 'error' : undefined}
          {...register('email')}
        />

        <Input
          placeholder="Şifrenizi giriniz"
          id="password"
          label="Parolanız"
          type="password"
          message={errors?.password?.message}
          status={errors?.password ? 'error' : undefined}
          {...register('password')}
        />

        <Button disabled={loading} color="secondary" type="submit" block>
          Üye ol
        </Button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
