import React from 'react';
import { ButtonProps } from './Button.types';
import Styles from './Button.module.scss';

const Button: React.FunctionComponent<ButtonProps> = props => {
  const { block, color, children, size, dataTestId, disabled, ...rest } = props;

  return (
    <button
      disabled={disabled}
      data-testid={dataTestId}
      className={[Styles['button'], Styles[`button--${color}`], block ? Styles['button--block'] : '', disabled ? Styles['button--disabled'] : '', Styles[`button--${size}`]].join(' ')}
      {...rest}
    >
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
