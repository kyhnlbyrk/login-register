import React from 'react';
import NonStyledInput, { NonStyledInputProps } from './index';

export default {
  title: 'Atoms/NonStyledInput',
  component: NonStyledInput,
};

export const Default = (props: NonStyledInputProps) => {
  return (
    <div style={{ maxWidth: '1140px', margin: 'auto' }}>
      <div style={{ border: '1px solid black' }}>
        <NonStyledInput {...props} />
      </div>
    </div>
  );
};
