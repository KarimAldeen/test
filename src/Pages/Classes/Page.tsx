import React from 'react'
import FillterNavWithTabs from '../../Components/DataTable/FillterNavWithSegmented'
import Table from './Table/TablePage'
import ModalForm from './Table/Modal'

const Page = () => {
  return (
    <div className='ClassesPage'>
          <header>بيانات الطالبات</header>
        <FillterNavWithTabs/>
        <Table/>
    <ModalForm/>
    </div>
  )
}

export default Page