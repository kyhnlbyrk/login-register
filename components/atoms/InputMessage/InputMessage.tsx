import React from 'react';
import { InputMessageProps } from './InputMessage.types';
import Styles from './InputMessage.module.scss';

const InputMessage: React.FunctionComponent<InputMessageProps> = props => {
  const { children, status, dataTestId } = props;

  return (
    <div data-testid={`${dataTestId}-message`} className={[Styles['input-message'], Styles[`input-message__${status}`]].join(' ')}>
      {children}
    </div>
  );
};

export default InputMessage;
