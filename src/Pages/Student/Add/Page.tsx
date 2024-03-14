import React from 'react';

import { usePostDynamic } from '../../../api/Route/Post';
import { getInitialValues, getValidationSchema } from '../formUtil';
import FormPage from '../../../Layout/Dashboard/FormPage';
import CreateForm from './Form';

const CreateProduct = () => {

    const { mutate } = usePostDynamic("products", "products", true);
  
    const handleSubmit = (values: any) => { mutate({  ...values}) };

    return (
        // <div>
       
        // </div>
        <div className='AddPage'>
                <header>
                إضافة طالبة
                </header>
                <main>
                <header> تفاصيل الطالب </header>
                <FormPage
                    handleSubmit={handleSubmit}
                    initialValues={getInitialValues([])}
                    validationSchema={getValidationSchema}
                    
                >
                    <CreateForm/>
                   
                </FormPage>
                </main>
        </div>
    );
};

export default CreateProduct;
