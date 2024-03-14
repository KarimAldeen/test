import React from 'react'
import { FaMoneyBill } from 'react-icons/fa'
import Image from '../../Ui/Image'
import { useNavigate, useParams } from 'react-router-dom'

const MoneyState = () => {
  const navigation = useNavigate()
  const {id} = useParams()
  const handelnavigation = ()=>{
    navigation(`/student/${id}/payment`)  
  } 
  return (
    <div className='MoneyState'>
        <header>
        الوضع المالي للطالبة
        </header>
        <main>
            <button>المستحق : 3.500.000 ل.س</button>
            <div>
                <div>
                <FaMoneyBill/>
                </div>
                <span>
                    <h6>
                    المتبقيات
                    </h6>
                    <p>
                    1.800.000 ل.س
                    </p>
                </span>
            </div>
            <article>
              {[1,2,3]?.map((item:any,index:any)=>{
                return (
                    <span key={index} onClick={handelnavigation} >
                    <Image src='/Icon/cash.png'/>
                    <h5>الدفعات</h5>
                    <button>التفاصيل</button>
                    </span>
                )
              })}
            </article>
        </main>
    </div>
  )
}

export default MoneyState