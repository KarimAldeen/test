import React from 'react';

import { usePostDynamic } from '../../../../api/Route/Post';
import { getInitialValues, getValidationSchema } from '../../formUtil';
import FormPage from '../../../../Layout/Dashboard/FormPage';
import CreateForm from './Form';
import { FaArrowRight } from 'react-icons/fa';

const CreateProduct = () => {

    const { mutate } = usePostDynamic("products", "products", true);

    const handleSubmit = (values: any) => { mutate({ ...values }) };

    return (
        // <div>

        // </div>
        <div className='FormPage student_time_detalis'>
            <header className='single_student_header'>
                <FaArrowRight />  نشاطات الطالبة <span>( آية العمري ) </span>
            </header>
            <main className='FormCard'>
                <header> تفاصيل الطالب </header>
                <FormPage
                    handleSubmit={handleSubmit}
                    initialValues={getInitialValues([])}
                    validationSchema={getValidationSchema}
                    ButtonName="حفظ"

                >
                    <CreateForm />

                </FormPage>
            </main>
        </div>
    );
};

export default CreateProduct;
