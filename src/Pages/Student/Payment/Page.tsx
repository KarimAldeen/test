import React from 'react'
import FillterNavWithRadio from '../../../Components/DataTable/FillterNavWithRadio'
import ActiveTabs from './ActiveTable'

const Page = () => {
  return (
    <div className='TimePage'>
    <FillterNavWithRadio/>
    
   <ActiveTabs/>

</div>
  )
}

export default Page