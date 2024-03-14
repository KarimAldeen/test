import { Select } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaLaptop } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'

const StudentCount = () => {
    const Options = [
        { value: 'هذا الأسبوع', label: 'هذا الأسبوع' },
        { value: 'هذا الأسبوع', label: 'هذا الأسبوع' },
        { value: 'هذا الأسبوع', label: 'هذا الأسبوع' },
      ]
      const handleChangeSelect = (value: string) => {
        console.log(`selected ${value}`);
      };
      const [t] = useTranslation()
  return (
    <div className='StudentCount'>
        <header>
            <h6>{t("عدد الطالبات")}</h6>
            <Select
          defaultValue="هذا الأسبوع"
          onChange={handleChangeSelect}
          suffixIcon={<IoMdArrowDropdown size={30} />}
          options={Options}
        />
        </header>
        <main>
           {[1,2,2,2]?.map((item:any,index:any)=>{
            return (
                <div>
                    <span>
                        <h6>طالبات الشعبة الأولى</h6>
                        <p>60 طالبة</p>
                    </span>
                    <FaLaptop/>
                </div>
            )
           })}
        </main>
       
    </div>
  )
}

export default StudentCount