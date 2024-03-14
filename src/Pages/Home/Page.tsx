import React from 'react'
import CountSection from '../../Components/Home/CountSection'
import LineChart from '../../Components/Chart/LineChart'
import ColumnChart from '../../Components/Chart/ColumnChart'
import CalendarSection from '../../Components/Home/CalendarSection'
import AreaChart from '../../Components/Chart/AreaChart'
import NoteSection from '../../Components/Home/NoteSection'
import ActivitySection from '../../Components/Home/ActivitySection'

const Page = () => {
  return (
    <div className='HomePage'>
      <div className='ChartSection'>
        <CountSection/>
        <div className='TowItem'>
        <ColumnChart/>
        <CalendarSection/>
        </div>
        <AreaChart/>

      </div>
      <div className='NoteSections'>
    <NoteSection/>
    <ActivitySection/>

      </div>
    </div>
  )
}

export default Page