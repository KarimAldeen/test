import React from 'react';
import Image from '../Components/Ui/Image';
import { Progress } from 'antd';
import {PercentageImageSrc,getStrokeColor} from '../Hooks/usePercentage';
const PercentageCard = () => {
  // Fake data for demonstration
  const fakeData = [
    { subject: 'رياضيات', percentage: 70 },
    { subject: 'علوم', percentage: 50 },
    { subject: 'لغة عربية', percentage: 90 },
    { subject: 'علوم', percentage: 50 },
    { subject: 'علوم', percentage: 20 },
    { subject: 'علوم', percentage: 30 },

    // Add more fake data as needed
  ];

  return (
    <div className='PercentageCards'>
      {fakeData.map((data, index) => (
        <div key={index} className='PercentageCard'>
          <div className='PercentageCard_Right'>
            <h6>{data.subject}</h6>
            <h4>{`%${data.percentage}`}</h4>
            <p>مستوى المادة</p>
          </div>
          <div className='PercentageCard_Mid'>
            <Image src={PercentageImageSrc(data.percentage)} />
          </div>
          <Progress
            type="circle"
            percent={data.percentage}
            size={80}
            className='PercentageCard_Left'
            strokeColor={getStrokeColor(data.percentage)}
          />
          </div>
      ))}
    </div>
  );
};

export default PercentageCard;
