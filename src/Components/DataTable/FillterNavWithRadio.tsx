import React, { useState } from 'react';
import { FaArrowRight, FaPlus } from 'react-icons/fa';
import SearchField from './SearchField';
import { useButtonState } from '../../zustand/ButtonState';

const FillterNavWithRadio = () => {
    const [activeButton, setActiveButton] = useState(0);
    const {setActiveTab } = useButtonState(state => state)

    // Function to handle button click
    const handleButtonClick = (index:number) => {
        setActiveButton(index);
        setActiveTab(index)
    };

    const buttonLabels = ["أوراق عمل", "نماذج السبر البيتي", "فيديوهات تعليمية"];

    return (
        <div className='FillterNavWithRadio'>
            <header>
                <FaArrowRight/>  نشاطات الطالبة <span>( آية العمري ) </span>
            </header>
            <span>
                <SearchField />
                <div className='ButtonTabs'>
                    {buttonLabels.map((label, index) => (
                        <button
                            key={index}
                            className={activeButton === index ? "Activebutton" : 'button'}
                            onClick={() => handleButtonClick(index)}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </span>
        </div>
    );
};

export default FillterNavWithRadio;
