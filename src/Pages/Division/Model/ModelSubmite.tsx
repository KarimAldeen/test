import React from 'react'
import { useModalTabsState } from '../../../zustand/ModalTabsState';
import { useModalState } from '../../../zustand/Modal';

const ModelSubmite = () => {


    const { isOpen, setIsOpen } = useModalState(state => state)
    const { ActiveTab, setActiveTab } = useModalTabsState(state => state);
   function handelNext(){
    setActiveTab(Number(ActiveTab) + 1)
    }
    function handelPre(){
        setActiveTab(Number(ActiveTab) - 1)
        }
    return (
        <div className='SubmiteButton'>
            <div onClick={handelPre}>
                {ActiveTab > 0 ? "رجوع للخطوة الثانية" :""}
                
            </div>
            <button onClick={handelNext}>
                الخطوة التالية
            </button>
        </div>
    )
}

export default ModelSubmite