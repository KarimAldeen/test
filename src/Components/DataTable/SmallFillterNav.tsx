import React from 'react'
import SearchField from './SearchField'
import { IoSearch } from 'react-icons/io5'
import { Select } from 'antd'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaArrowRight, FaPlus } from 'react-icons/fa'
import { useModalState } from '../../zustand/Modal'

const SmallFillterNav = () => {

  
  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    const {isOpen,setIsOpen} = useModalState(state => state)
  return (
    <div className='SmallFillterNav'>
        <header>
        <FaArrowRight/>  نشاطات الطالبة <span>( آية العمري ) </span>
        </header>
      <SearchField />
     
    </div>
  )
}

export default SmallFillterNav