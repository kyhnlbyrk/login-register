import React, { useState, FC } from 'react';
import './Tab.styles.scss';
import { TabPanelProps, TabProps } from './Tab.types';
import Panel from './Panel';

const Tab: FC<TabProps> & { Panel: React.FC<TabPanelProps> } = props => {
  const { children, dataTestId } = props;

  React.Children.forEach(children, (element: any, i) => {
    if (!React.isValidElement(element as typeof Tab.Panel) || (element.type.displayName && element.type.displayName !== 'Panel') || typeof element.type !== 'function') {
      throw new Error("Hey <Tab> component'i children olarak sadece <Tab.Panel> component'i kabul eder ve Panel'inde title'ı olmak zorunda!");
    }
  });

  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      setActiveTab(activeTab === 0 ? React.Children.count(children) - 1 : activeTab - 1);
    } else if (event.key === 'ArrowRight') {
      setActiveTab(activeTab === React.Children.count(children) - 1 ? 0 : activeTab + 1);
    }
  };

  return (
    <div className="tab" onKeyDown={handleKeyDown} tabIndex={0} data-testid={dataTestId}>
      <div className="tab__header">
        {React.Children.map(children, (child: any, index) => (
          <button key={child.props.title} className={`tab__header__item ${index === activeTab ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
            {child.props.title}
          </button>
        ))}
      </div>
      <div className={`tab__content`}>{children && children[activeTab].props.children}</div>
    </div>
  );
};

Tab.Panel = Panel;

export default Tab;
