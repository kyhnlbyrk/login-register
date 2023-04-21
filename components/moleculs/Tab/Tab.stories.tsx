import React from 'react';
import Card from '../../atoms/Card';
import { TabProps } from './Tab.types';
import Tab from './Tab';

export default {
  title: 'Molecules/Tab',
  component: Tab,
};

export const Default = (props: TabProps) => {
  return (
    <Tab dataTestId="tab">
      <Tab.Panel title="Giriş Yap"> Giriş Componenti </Tab.Panel>
      <Tab.Panel title="Üye ol">Üye ol componenti </Tab.Panel>
    </Tab>
  );
};
