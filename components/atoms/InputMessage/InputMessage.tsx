import React from 'react';
import { InputMessageProps } from './InputMessage.types';
import './InputMessage.styles.scss';

const InputMessage: React.FunctionComponent<InputMessageProps> = props => {
  const { children, status, dataTestId } = props;

  return (
    <div data-testid={`${dataTestId}-message`} className={['input-message', `input-message__${status}`].join(' ')}>
      {children}
    </div>
  );
};

export default InputMessage;
