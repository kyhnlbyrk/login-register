import React from 'react';
import { CardProps } from './Card.types';
import Styles from './Card.module.scss';

const Card: React.FunctionComponent<CardProps> = props => {
  const { size, children } = props;

  return <div className={[Styles.card, Styles[`card__${size}`]].join(' ')}>{children}</div>;
};
Card.defaultProps = {
  size: 'large',
};

export default Card;
