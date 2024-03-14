import React from 'react';
import { FaFileWord, FaHome } from 'react-icons/fa';
import Image from '../Components/Ui/Image';
import {PercentageImageSrc} from '../Hooks/usePercentage';

const ChartBigCards = () => {
  // Fake data for demonstration
  const fakeData = [
    { percentage: 90, students: 50, header:"نسبة الحاصلين على العلامة التامّة",info:"طالب وطالبة",icon:<FaHome/> },
    { percentage: 60, students: 40, header:"نسبة الحاصلين على العلامة التامّة",info:"طالب وطالبة",icon:<FaHome/> },
    { percentage: 20, students: 30, header:"نسبة الحاصلين على العلامة التامّة",info:"طالب وطالبة",icon:<FaHome/> },
  ];

  return (
    <div className='ChartBigCards'>
      {fakeData.map((data, index) => (
        <div key={index} className='ChartBigCard'>
          <div className='ChartBigCard_Right'>
            <h4>{data?.header}</h4>
            <h5>{`%${data.percentage}`}</h5>
            <p>{`${data.students + data?.info}`}</p>
          </div>
          <div className='ChartBigCard_Mid'>
            <Image src={PercentageImageSrc(data.percentage)} />
          </div>
          <div className='ChartBigCard_Left'>
            <span>
             {data?.icon}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartBigCards;
