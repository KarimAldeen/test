import React from 'react';
import { Spin } from 'antd';
import { useModalTabsState } from '../../zustand/ModalTabsState';
import Form from './Form';

const components = [
  { component:  <Form/> },
  { component: <>H2</> },
  { component: <>H3</> },
  { component: <>H4</> },
  { component: <>H5</> },


];

const ActiveTabs = () => {
  const { ActiveTab } = useModalTabsState(state => state);

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
