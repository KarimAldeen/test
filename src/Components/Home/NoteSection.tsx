import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';

const NoteSection = () => {
  // Static fake data array
  const notesData = [
    {
      id: 1,
      icon: <FaMoneyBill />,
      title: 'ملاحظة مالية',
      content: [
        'الرسوم الدراسية: المبلغ المطلوب من الأهل  200000 ل.س',
        'مبلغ أخر: المبلغ المطلوب من الأهل  300000 ل.س'
      ]
    },
    {
      id: 2,
      icon: <FaMoneyBill />,
      title: 'ملاحظة مالية',
      content: [
        'الرسوم الدراسية: المبلغ المطلوب من الأهل  200000 ل.س',
        'تكلفة أخرى: المبلغ المطلوب من الأهل  150000 ل.س',
        'تكلفة أخرى: المبلغ المطلوب من الأهل  150000 ل.س',
        'تكلفة أخرى: المبلغ المطلوب من الأهل  150000 ل.س'
      ]
    },
    {
      id: 3,
      icon: <FaMoneyBill />,
      title: 'ملاحظة مالية',
      content: [
        'الرسوم الدراسية: المبلغ المطلوب من الأهل  200000 ل.س',
        'تكلفة أخرى: المبلغ المطلوب من الأهل  150000 ل.س'
      ]
    }
    ,
    {
      id: 4,
      icon: <FaMoneyBill />,
      title: 'ملاحظة مالية',
      content: [
        'الرسوم الدراسية: المبلغ المطلوب من الأهل  200000 ل.س',
        'تكلفة أخرى: المبلغ المطلوب من الأهل  150000 ل.س',
        'تكلفة أخرى: المبلغ المطلوب من الأهل  150000 ل.س',
        'تكلفة أخرى: المبلغ المطلوب من الأهل  150000 ل.س'
      ]
    }
    ,
    {
      id: 5,
      icon: <FaMoneyBill />,
      title: 'ملاحظة مالية',
      content: [
        'الرسوم الدراسية: المبلغ المطلوب من الأهل  200000 ل.س',
        'تكلفة أخرى: المبلغ المطلوب من الأهل  150000 ل.س'
      ]
    }
  ];

  return (
    <div className='NoteSection'>
      <header>
        <h4>ملاحظات اليوم</h4> <h6>8/3/2021</h6>
      </header>
    <div className='NoteScrollerChanger'>
    <div className='Notes'>
        {notesData.map(note => (
          <article key={note.id}>
            <div>
              <i>{note.icon}</i>
              <h5>{note.title}</h5>
            </div>
            {note.content.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </article>
        ))}
      </div>
    </div>
    </div>
  );
};

export default NoteSection;
