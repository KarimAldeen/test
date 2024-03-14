import React from 'react'
import SmallFillterNav from '../../../Components/DataTable/SmallFillterNav'
import MoneyState from '../../../Components/Student/activity/MoneyState'
import StudentsTime from '../../../Components/activity/StudentsTime'
import StudentBehavior from '../../../Components/activity/StudentBehavior'
import TablePage from './DataTable/TablePage'
const Page = () => {
  return (
    <div className='activity_page'>
      <div className='big_section'> 
        <SmallFillterNav/>
        <div className='TowItem'>
          <StudentsTime/>
          <StudentBehavior/>
        </div>
        <TablePage/>
      </div>
      <div className='small_section'>
        <MoneyState/>


      </div>
    </div>
  )
}

export default Page