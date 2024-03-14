import { Divider, Steps } from 'antd';
import React, { useState } from 'react'
import { useTabsState } from '../../../zustand/TabsState';
import { useModalTabsState } from '../../../zustand/ModalTabsState';
import Form from '../Form';
import ActiveTabs from '../ActiveTabs';

const ModelBody = () => {
  const { ActiveTab, setActiveTab } = useModalTabsState(state => state);
  function handelTabClick(index:number){
    setActiveTab(index)
  }

  const steps = [
    {
      title: 'الخطوة 1',
      description: 'التفاصيل الشخصية'
    },
    {
      title: 'الخطوة 2',
      description: 'التفاصيل الشخصية'
    },
    {
      title: 'الخطوة 3',
      description: 'التفاصيل الشخصية'
    },
    {
      title: 'الخطوة 4',
      description: 'التفاصيل الشخصية'
    },
    {
      title: 'الخطوة 5',
      description: 'التفاصيل الشخصية'
    },
  ];

  return (
    <div className='ModelBody'>
      <div className="ModelBodyTabs">
        {steps.map((step, index) => (
          <div onClick={()=>handelTabClick(index)} className={`ModelBodyTab ${ActiveTab === index  ? 'activeModeltab' : ''}`} key={index}>
            <div>{index + 1}</div>
            <span>
              <h6>{step.title}</h6>
              <h4>{step.description}</h4>
            </span>
          </div>
        ))}
      </div>
      <div className='ModelBodyForm'>
        <header>إضافة طالب</header>
        <ActiveTabs/>
       

      </div>
    </div>
  );
};

export default ModelBody;
