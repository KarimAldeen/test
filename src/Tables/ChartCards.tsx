import React from 'react';
import Image from '../Components/Ui/Image';
import { FaFileWord, FaHome } from 'react-icons/fa';

const generateFakeData = () => {
  
  const data = [];
  for (let i = 0; i < 4; i++) {
    const percentage = Math.random() * 100; 
    const studentCount = Math.floor(Math.random() * 100); 
    const header = `نسبة الحاصلين على العلامة التامة`; 
    const info = "طالب وطالبة";
   const icon = <FaHome/> 

    data.push({ percentage, studentCount ,header, info,icon});
  }
  return data;
};  


const ChartCard = ({ percentage, studentCount, header ,info,icon } :any) => {
  return (
    <div className='ChartCard'>
      <div className='ChartCard_Right'>
        <h4>{header}</h4>
        <h5>{percentage.toFixed(2)}%</h5>
        <p>{studentCount} {info}</p>
      </div>
      <div className='ChartCard_Mid'>
        <Image src='../Cards/Graph.png' />
      </div>
      <div className='ChartCard_Left'>
        <span>
        <FaHome/> 
        </span>
      </div>
    </div>
  );
};

const ChartCards = () => {
  const data = generateFakeData();

  return (
    <div className='ChartCards'>
      {data.map((item:any, index) => (
        <ChartCard
          key={index}
          percentage={item.percentage}
          studentCount={item.studentCount}
          header={item?.header}
          info={item?.info}

        />
      ))}
    </div>
  );
};

export default ChartCards;
