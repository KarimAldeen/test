import { Form, Input } from 'antd'
import React from 'react'
import useFormField from '../../../Hooks/useFormField';

const Default = ({ name, label, placeholder, isDisabled, onChange, props,type ,no_label}: any) => {
  const { Field, formik, isError, errorMsg, t } = useFormField(name, props);

  return (
    <div className="ValidationField w-100" >
      <label htmlFor={name} className="text">

         {no_label ? <span>empty</span>  : t(`${label ?  label : name}`)}
        

        </label>
      <Form.Item
        hasFeedback
        validateStatus={isError ? 'error' : ''}
        help={isError ? errorMsg : ''}
      >
        <Field
          as={Input}
          type={type ?? "text"}
          placeholder={t(`${placeholder ?placeholder  : name}`)}
          name={name}
          disabled={isDisabled}
          size="large" 
          
        //  onChange={onChange ? onChange : handleChange}
        />
      </Form.Item>
    </div>
  );
};

export default  React.memo(Default);
;
