import React from 'react';
import { Segmented } from 'antd';

const ClassesSegmented: React.FC = () => (
  <Segmented<string>
    options={['الأحد', 'اللإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس']}
    onChange={(value) => {
      console.log(value); // string
    }}
    className='Segmented' 
    block 
    defaultChecked
  />
);

export default ClassesSegmented;