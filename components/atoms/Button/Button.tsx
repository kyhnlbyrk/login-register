import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.styles.scss';

const Button: React.FunctionComponent<ButtonProps> = props => {
  const { block, color, children, size, ...rest } = props;

  return (
    <button className={['button', `button--${color}`, block ? 'button--block' : '', `button--${size}`].join(' ')} {...rest}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  block: false,
  color: 'primary',
  size: 'medium',
};

export default Button;
