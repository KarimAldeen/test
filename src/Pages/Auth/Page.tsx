import React from 'react'
import LoginForm from './LoginForm';
import { LoginBg } from '../../Layout/app/Const';
import { useTranslation } from 'react-i18next';


const Auth = () => {

    const [t] = useTranslation()
  return (

    <div className='Auth'>
            <div className='In_Auth'>
                  <header>
                    <h1>{t("مرحباً بك")}</h1>
                    <p>{t("أدخل بريدك الإلكتروني وكلمة المرور لتسجيل الدخول")}</p>
                  </header>
                   <LoginForm/>

        </div>

    </div>
  )
}

export default Auth