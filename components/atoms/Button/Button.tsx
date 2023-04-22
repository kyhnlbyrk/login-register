import React from 'react';
import { ButtonProps } from './Button.types';
import Styles from './Button.module.scss';

const Button: React.FunctionComponent<ButtonProps> = props => {
  const { block, color, children, size, dataTestId, ...rest } = props;

  return (
    <button
      data-testid={dataTestId}
      className={[Styles['button'], Styles[`button--${color}`], block ? Styles['button--block'] : '', Styles[`button--${size}`]].join(' ')}
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
