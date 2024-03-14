import React from 'react';
import Image from '../Ui/Image';

const ActivitySection = () => {
  // Static fake data array
  const ActivitysData = [
    {
      id: 1,
      image: "/Image/1.png",
      info: '3 طالبات حصلوا على جائزة في مسابقة الشطرنج',
      time:"منذ 3 ساعات"
    
    },
    {
      id: 2,
      image: "/Image/1.png",
      info: '3 طالبات حصلوا على جائزة في مسابقة الشطرنج',
      time:"منذ 3 ساعات"
    
    },
    {
      id: 3,
      image: "/Image/1.png",
      info: '3 طالبات حصلوا على جائزة في مسابقة الشطرنج',
      time:"منذ 3 ساعات"
    
    }
    ,
    {
      id: 4,
      image: "/Image/1.png",
      info: '3 طالبات حصلوا على جائزة في مسابقة الشطرنج',
      time:"منذ 3 ساعات"
    
    }
    ,
    {
      id: 5,
      image: "/Image/1.png",
      info: '3 طالبات حصلوا على جائزة في مسابقة الشطرنج',
      time:"منذ 3 ساعات"
      
    }
  ];

  return (
    <div className='ActivitySection'>
      <header>
        <h4>النشاط الطلابي </h4> 
      </header>
    <div className='ActivityScrollerChanger'>
    <div className='Activitys'>
        {ActivitysData.map(Activity => (
          <article key={Activity.id}>
              <Image src={Activity.image}/>
              <h5>{Activity.info}</h5>
              <p>{Activity?.time}</p>
        
          </article>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ActivitySection;
