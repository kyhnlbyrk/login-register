import axios from 'axios';
import { InputControls } from '../components/molecules/LoginForm';
import { InputControls as RegisterFormProps } from '../components/molecules/RegisterForm';

const API = axios.create({ baseURL: process.env.NEXT_PUBLIC_CORE_API });

export const login = async ($data: InputControls) => {
  const data = await API.post('/login', $data);
  return data;
};

export const register = async ($data: RegisterFormProps) => {
  const data = await API.post('/register', $data);
  return data;
};
