
import React from 'react';
import Card, { CardProps } from './index';

export default {
  title: 'Atoms/Card',
  component: Card,
};

export const Default = (props: CardProps) => {
  return (
    <div style={{ maxWidth: '1140px', margin: 'auto' }}>
      <Card {...props}>test</Card>
    </div>
  );
};
