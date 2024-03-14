import React from 'react'
import SearchField from './SearchField'
import { IoSearch } from 'react-icons/io5'
import { Select } from 'antd'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaArrowRight, FaPlus } from 'react-icons/fa'
import { useModalState } from '../../zustand/Modal'

const FillterNav = () => {
  const OptionsData =[
    {
      value: 'jack',
      label: 'Jack',
    },
    {
      value: 'lucy',
      label: 'Lucy',
    },
    {
      value: 'tom',
      label: 'Tom',
    },
  ]
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  
  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    const {isOpen,setIsOpen} = useModalState(state => state)
  return (
    <div className='FillterNav'>
      <SearchField />
      <div className='SelectFillters'>
          <button className='add_button'>
          إضافة طالب جديد <FaPlus />

          </button> 
          <button className='add_button' onClick={setIsOpen}>
          نقل طالب إلى <FaArrowRight />

          </button> 
        {/* <div className='SearchButton'>
          <IoSearch />
        
        
        </div> */}
        <Select
            showSearch
            placeholder="الصف"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={OptionsData}
            size='large'
            suffixIcon={<IoMdArrowDropdown size={30} className="custom_select_icon" />}

          
          
          />
            <Select
            showSearch
            placeholder="الشعبة"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={OptionsData}
            size='large'
            suffixIcon={<IoMdArrowDropdown size={30} className="custom_select_icon" />}

            
          
          />
      </div>
    </div>
  )
}

export default FillterNav