
import React, { useState } from 'react';
import { Modal } from 'antd';
import ValidationField from '../../../Components/ValidationField/ValidationField';
import { useModalState } from '../../../zustand/Modal';
import FormikForm from '../../../Layout/Dashboard/FormikForm';
import * as Yup from "yup";
import ModelBody from './ModelBody';
import ModelSubmite from './ModelSubmite';

const ModalForm: React.FC = () => {
    const { isOpen, setIsOpen } = useModalState(state => state)



    return (
        <>
            <Modal className='AddModalForm' centered width={"80vw"} footer={null} open={isOpen} onOk={() => setIsOpen()} onCancel={() => setIsOpen()}>
                <FormikForm
                    handleSubmit={() => {}}
                    initialValues={() => {
                        return {
                            id: null,
                            name: "",
                        }
                    }}
                    validationSchema={() => {
                        return Yup.object().shape({
                            name: Yup.string().required('required'),

                        });
                    }}

                >
                        <ModelBody/>
                        <ModelSubmite  />
                </FormikForm>

            </Modal>
        </>
    );
};

export default ModalForm;