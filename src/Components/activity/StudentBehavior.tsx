import React, { useState } from 'react';
import Image from '../Ui/Image';

const StudentBehavior = () => {
const Data =[
  {
    icon: '/Icon/medal.png',
    title: 'شكر و تقدير',
    value: '1',
    buttonText: 'عرض',
  },
  {
    icon: '/Icon/warning.png',
    title: 'شكر و تقدير',
    value: '1',
    buttonText: 'عرض',
  },
  {
    icon: '/Icon/Error.png',
    title: 'شكر و تقدير',
    value: '1',
    buttonText: 'عرض',
  },
]
  return (
    <div className='StudentBehavior'>
      <header>السلوك الصفّي للطالبة</header>
      <main>
        {Data.map((item, index) => (
          <article key={index}>
            <Image src={item.icon} />
            <div>
              <h6>{item.title}</h6>
              <p>{item.value}</p>
            </div>
            <button>{item.buttonText}</button>
          </article>
        ))}
      </main>
    </div>
  );
};

export default StudentBehavior;
