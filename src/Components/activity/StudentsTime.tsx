import React from 'react';
import { getColorName } from '../../Hooks/usePercentage';
import { useNavigate, useParams } from 'react-router-dom';

interface StudentTimeData {
  id: number;
  absences: number;
  justified: number;
  unjustified: number;
  totalDays: number;
}

interface StudentsTimeProps {
  data: StudentTimeData[];
}

const StudentsTime= () => {
  const {id} = useParams()
    const data = [
        {
          id: 1,
          absences: 6,
          justified: 4,
          unjustified: 2,
          totalDays: 30
        },
        {
          id: 2,
          absences: 8,
          justified: 5,
          unjustified: 3,
          totalDays: 30
        },
        {
          id: 3,
          absences: 4,
          justified: 3,
          unjustified: 1,
          totalDays: 30
        }
      ];
      const navigate = useNavigate()
      const handelnaviagate = ()=>{
        navigate(`/student/${id}/time`)
      }
  return (
    <div className='StudentsTime'>
      <header>دوام الطالبة</header>
      <main>
        {data.map((item: StudentTimeData, index: number) => {
          return (
            <article key={item.id} onClick={handelnaviagate}>
              <span>
                <h6>الغياب</h6>
                <p  data-color={getColorName(item.absences)}>{item.absences}</p>
              </span>
              <div>
                <span>
                  <div>مبرر<span>{item.justified}</span></div>
                  <div>غير مبرر<span>{item.unjustified}</span></div>
                </span>
                <span>
                  <div className='StudentsTimeTotal'>
                    المجموع
                  </div>
                  <p>
                    {item.absences} من {item.totalDays} يوم
                  </p>
                </span>
              </div>
            </article>
          );
        })}
      </main>
    </div>
  );
}

export default StudentsTime;
