export interface NonStyledInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  focused?: boolean;
  disabled?: boolean;
  value?: string | number;
}
