import React from 'react'
import CountSection from '../../Components/Student/CountSection'
import ColumnChart from '../../Components/Chart/ColumnChart'
import DetailsSections from './DetailsSections'
import StudentCount from '../../Components/Student/StudentCount'

const Page = () => {
  return (
    <div className='StudentPage'>
      <div className='ChartSection'>
        <CountSection/>
        <div className='TowItem'>
        <StudentCount/>
        <ColumnChart/>
        </div>
      

      </div>
        <DetailsSections/>
    </div>
  )
}

export default Page