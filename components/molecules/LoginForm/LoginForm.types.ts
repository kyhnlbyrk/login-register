export interface InputControls {
  email: string;
  password: string;
}

export interface LoginFormProps {
 onSubmit: (values: InputControls) => void;
 loading?: boolean;
}
