import React, { useState } from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { IoMdArrowDropup , IoMdArrowDropdown  } from "react-icons/io";
import { useModalState } from '../../zustand/Modal';
import ModalForm from './Model/Modal';

const Page = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const {isOpen,setIsOpen} = useModalState(state => state)
  const handelOpenModal = ()=>{
    setIsOpen()
  }

  return (
    <div className='Division'>
      <ModalForm/>
      <div className="Divisions_section">
        <div className="CountCards">
          {[1,2,3,4,1,2,2,5]?.map((item, index) => {
            return (
              <div key={index} className={`CountCard ${!showAll && index >= 5 ? 'hidden' : ''}`}>
                <i><FaMoneyBill/></i>
                <h4>الطالبات</h4>
              </div>
            );
          })}

        </div>
        {showAll ? (
          <span className='Show_More_Button' onClick={toggleShowAll}>
          <IoMdArrowDropup  />

          </span>
        ):(
          <span className='Show_More_Button' onClick={toggleShowAll}>
          <IoMdArrowDropdown  />

        </span>
        )}


        <button className='Add_button' onClick={handelOpenModal}>
        إضافة مادة
        </button>
      </div>
    </div>
  );
};

export default Page;
