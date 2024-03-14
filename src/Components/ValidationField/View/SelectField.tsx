import { Form, Select } from 'antd'
import React from 'react'
import useFormField from '../../../Hooks/useFormField';

const SelectField = ({ name, label, placeholder, isDisabled,option,isMulti,onChange,className, props,no_label}: any) => {

  const {  errorMsg, isError, t ,formik} = useFormField(name, props)
  const SelecthandleChange = (value: { value: string; label: React.ReactNode }) => {
     formik.setFieldValue(name, value)

  };
  return (
     <div className='ValidationField'>
                {no_label ? <span>empty</span>  : t(`${label ?  label : name}`)}

        <Form.Item
          hasFeedback
          validateStatus={isError ? "error" : ""}
          help={isError ? errorMsg : ""}
        >
          <Select
          placeholder={t(`${placeholder ?placeholder  : name}`)}
            disabled={isDisabled}
            options={option}
            size="large" 
            className={`${className} w-100`}
            defaultValue={formik.values[name]}
            allowClear
            {...(isMulti && { mode: "multiple" })}
            onChange={onChange || SelecthandleChange}



          />
        </Form.Item>
      </div>
  )
}

export default React.memo(SelectField);
