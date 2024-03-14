import { Form, Input } from 'antd'
import React from 'react'
import useFormField from '../../../Hooks/useFormField';
const { TextArea } = Input;

const TextField = ({ name, label, placeholder, isDisabled, onChange, props ,no_label}: any) => {
  const { Field, formik, isError, errorMsg, t } = useFormField(name, props);
  const TextFieldhandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
    formik.setFieldValue(name, e.target.value)

  };
  return (
    <div className="ValidationField w-100" >
              {no_label ? <span>empty</span>  : t(`${label ?  label : name}`)}

      <Form.Item
        hasFeedback
        validateStatus={isError ? 'error' : ''}
        help={isError ? errorMsg : ''}
      >
        <Field
          as={TextArea}
          placeholder={t(`${placeholder ?placeholder  : name}`)}
          name={name}
          disabled={isDisabled}
          size="large" 
          showCount
          maxLength={2000}
          onChange={onChange || TextFieldhandleChange}
          style={{ height: 145, resize: 'none' }}
        />
      </Form.Item>
    </div>
  );
};

export default  React.memo(TextField);
;
