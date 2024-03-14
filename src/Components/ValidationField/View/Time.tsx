import { Form, TimePicker } from 'antd'
import React from 'react'
import useFormField from '../../../Hooks/useFormField';

const Time = ({ name, label,className,isDisabled,onChange,props ,no_label}: any) => {

  const { errorMsg, isError, t, formik } = useFormField(name, props)
  const onCalendarChange = (value: any) => {
    
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
              <TimePicker
                allowClear
                className={`${className} w-100`}
                size="large" 
                defaultValue={formik.values[name]}
               onChange={onChange || onCalendarChange}
               disabled={isDisabled}
               />
              



      </Form.Item>
    </div>
  )
}

export default Time