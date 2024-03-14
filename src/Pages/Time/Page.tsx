import React from 'react'
import FillterNav from '../../Components/DataTable/FillterNav'
import Table from './Table/TablePage'
import Model from './Table/Modal'

const Page = () => {
  return (
    <div className='TimePage'>
        <header>بيانات الطالبات</header>
        <FillterNav/>

        <Table/>
        <Model/>

    </div>
  )
}

export default Page

