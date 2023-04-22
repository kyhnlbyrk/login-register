export interface InputControls {
  email: string;
  password: string;
  name: string;
}

export interface RegisterFormProps {
  onSubmit: (values: InputControls) => void;
  loading?: boolean;
}
