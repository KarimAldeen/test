import React from 'react';
import { useTabsState } from '../../../zustand/TabsState';
import Page from '../../../Components/Chart/AreaChart';
import { Spin } from 'antd';
import { useButtonState } from '../../../zustand/ButtonState';

const components = [
  { component: <h1>Hellow1</h1>},
  { component:<h1> Hellow2</h1>},
  { component: <h1>Hellow3</h1>}
];

const ActiveTabs = () => {
  const { ActiveTab } = useButtonState(state => state);

  const renderComponent = () => {
    const selectedComponent = components[Number(ActiveTab)]; // Adjust index to start from 0
    return selectedComponent ? selectedComponent.component : <Spin />;
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
}

export default ActiveTabs;
