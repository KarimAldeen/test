import { Form, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import useFormField from '../../../Hooks/useFormField';
import { useNavigate } from 'react-router-dom';

const SearchField = ({ name, label, placeholder, isDisabled, searchBy, option, isMulti, onChange, className, props ,no_label}: any) => {
  const { errorMsg, isError, t, formik } = useFormField(name, props);
  const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate()
  useEffect(() => {
    const searchParams = new URLSearchParams(window?.location?.search);
    setSearchQuery(searchParams?.get('search') || '');
  }, []);



  const SelecthandleChange = (value: { value: string; label: React.ReactNode }) => {
    formik?.setFieldValue(name, value);

  };
  const SearchHandleChange = (value:any) => {
    navigate(`${window?.location?.pathname}?${searchBy}=${value}`, { replace: true });

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
          placeholder={t(`${placeholder ? placeholder : name}`)}
          disabled={isDisabled}
          options={option}
          size="large"
          className={`${className} w-100`}
          defaultValue={formik.values[name]}
          allowClear
          {...(isMulti && { mode: "multiple" })}
          onChange={onChange || SelecthandleChange}
          showSearch  
          optionFilterProp="label" 
            onSearch={SearchHandleChange}
            
        />
      </Form.Item>
    </div>
  );
};

export default React.memo(SearchField);
