import React, { FC } from 'react';
import { TabPanelProps } from './Tab.types';

const Panel: FC<TabPanelProps> = props => {
  const { children } = props;
  return <div className="tab__panel">{children}</div>;
};

export default Panel;
