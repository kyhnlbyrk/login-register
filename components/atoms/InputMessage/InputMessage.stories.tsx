
import React from 'react';
import InputMessage, { InputMessageProps } from './index';

export default {
  title: 'Atoms/InputMessage',
  component: InputMessage,
};

export const Default = (props: InputMessageProps) => {
  return (
    <div style={{ maxWidth: '1140px', margin: 'auto' }}>
      <InputMessage {...props}>test</InputMessage>
    </div>
  );
};
