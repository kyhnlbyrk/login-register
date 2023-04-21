import React from 'react';
import Input, { InputProps } from './index';

export default {
  title: 'Molecules/Input',
  component: Input,
};

export const Default = (props: InputProps) => {
  return (
    <div style={{ maxWidth: '1140px', margin: 'auto' }}>
      <Input {...props} dataTestId="input" label="Ad Soyad" placeholder="Kayahan Albayrak" id="isim" />
    </div>
  );
};
