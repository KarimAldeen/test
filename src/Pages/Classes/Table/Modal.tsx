
import React, { useState } from 'react';
import { Modal } from 'antd';
import ValidationField from '../../../Components/ValidationField/ValidationField';
import { useModalState } from '../../../zustand/Modal';
import FormikForm from '../../../Layout/Dashboard/FormikForm';
import * as Yup from "yup";
import PdfUploader from '../../../Components/CustomFields/PdfUploader';

const ModalForm: React.FC = () => {
    const { isOpen, setIsOpen } = useModalState(state => state)



    return (
        <>
            <Modal className='ModalForm' centered width={"40vw"} footer={null} open={isOpen} onOk={() => setIsOpen()} onCancel={() => setIsOpen()}>
                <header>نقل  إلى </header>
                <FormikForm
                    handleSubmit={() => {

                    }}
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
                    <main>
                        <ValidationField name='name' label='المادة' />
                        <ValidationField name='name' type='TextArea' label='الواجب' />
                        <PdfUploader name="name2"/>
                        <div className="buttons">
                            <button>
                                إرسال
                            </button>
                            <button onClick={() => setIsOpen()}>
                                تراجع
                            </button>
                        </div>
                    </main>
                </FormikForm>

            </Modal>
        </>
    );
};

export default ModalForm;