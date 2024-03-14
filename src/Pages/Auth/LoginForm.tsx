import React from 'react'
import { Formik, Form, Field, useFormikContext } from 'formik';
import Translate from '../../Components/Utils/Translate';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppKeyEnum } from "../../enums/AppKey";
import Image from '../../Components/Ui/Image';
import { DatePicker, Input, Select, Switch } from 'antd';
import { useChangeLanguage } from '../../Hooks/useChangeLanguage';

import type { DatePickerProps } from 'antd';

const LoginForm = () => {
  const [t] = useTranslation();

  const navigate = useNavigate()
  const formik = useFormikContext<any>()
  const { currentLanguage, changeLanguage } = useChangeLanguage();

  const handelSubmit = (values: any) => {

    localStorage.setItem(AppKeyEnum?.TOKEN_KEY, "fake")
    navigate('/', { replace: true })
  }
  const handleChange = (value: string) => {
    changeLanguage(value);
  };
  
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};
  return (
    <div className='LoginForm'>
     

      <Formik
        initialValues={{ username: '', password: '',language:"arabic" }}
        onSubmit={handelSubmit}
      >
        <Form className='AuthForm'>
          <Image src='../Layout/Logo.png' />

    <div className='AuthSelect'>
          <label className='form-label' htmlFor='password'>
              {t("العام الدراسي")}
            </label>

                <DatePicker
                 onChange={onChange}
                  picker="year" 
                  className='Select'
                  size="large"
                  placeholder={t(" اختر العام الدراسي ")}
                  style={{width:"100%"}}
                
                  />

          </div>
          <div className='AuthInput'>

            <label className='form-label' htmlFor='username'>
              {t("البريد الإلكتروني")}
            </label>

            <Field
              placeholder={t('البريد الإلكتروني ')}
              as={Input}
              type='text'
              id='username'
              name='username'
              className="Input"
              size="large"
              
              
            />
          </div>

          <div className='AuthInput'>
            <label className='form-label' htmlFor='password'>
              {t("كلمة المرور")}
            </label>
            <Field
              placeholder={t('كلمة المرور')}
              as={Input.Password}
              type='password'
              id='password'
              name='password'
              className="passwordInput"
              size="large"
              height={50}
            />
          </div>
          {/* <div className='AuthSelect'>
          <label className='form-label' htmlFor='password'>
              {t("اللغة")}
            </label>
            <Select
              onChange={handleChange}
              defaultValue={currentLanguage === "ar" ? "arabic" : "english" }
              className='Select'
              size="large"
              options={[
                { value: 'ar', label: t('arabic') },
                { value: 'en', label: t('english') },
            
              ]}
            />
          </div> */}
             <div className='remamberMe'><Switch size="small" className='SwitchRemamberMe' defaultChecked /> <h6>{t("ذكّرني")} </h6> </div>


          <button type='submit' className='btn SubmiteButton  btn-lg btn-block w-100'>
            {t("تسجيل الدخول")}
          </button>
        </Form>

      </Formik>

    </div>

  )
}

export default LoginForm