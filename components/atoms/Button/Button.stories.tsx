
import React from 'react';
import Button, { ButtonProps } from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Default = (props: ButtonProps) => {
  return (
    <div style={{ maxWidth: '1140px', margin: 'auto' }}>
      <Button {...props}>test</Button>
    </div>
  );
};
