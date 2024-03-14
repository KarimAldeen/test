
import React, { useState } from 'react';
import { Button, Modal, Select } from 'antd';
import { useModalState } from '../../../../zustand/Modal';
import { IoMdArrowDropdown } from 'react-icons/io';

const ModalForm: React.FC = () => {
    const { isOpen, setIsOpen } = useModalState(state => state)


    const handleOk = () => {
        setIsOpen();
    };

    const handleCancel = () => {
        setIsOpen();
    };

    const OptionsData = [
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

    return (
        <>
            <Modal className='ModalForm' centered width={"40vw"} footer={null} open={isOpen}  onOk={handleOk} onCancel={handleCancel}>
                <header>نقل  إلى </header>
                <main>
                    <div className="ValidationField w-100" >
                        <label className="text">
                            الصف
                        </label>
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


                    </div>
                    <div className="ValidationField w-100" >



                        <label className="text">
                            الشعبة
                        </label>
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
                    <div className="buttons">
                        <button>
                            إرسال
                        </button>
                        <button onClick={handleCancel}>
                            تراجع
                        </button>
                    </div>
                </main>
            </Modal>
        </>
    );
};

export default ModalForm;