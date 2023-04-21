import React from 'react';
import { CardProps } from './Card.types';
import './Card.styles.scss';

const Card: React.FunctionComponent<CardProps> = props => {
  const { size, children } = props;

  return <div className={['card', `card__${size}`].join(' ')}>{children}</div>;
};
Card.defaultProps = {
  size: 'large',
};

export default Card;
