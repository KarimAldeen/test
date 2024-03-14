import React from 'react'
import { FaMoneyBill } from 'react-icons/fa'
import Image from '../Ui/Image'

const CountSection = () => {
  return (
    <div className='CountSection'>
        <div className='CountCards'>
      {  [1,2,3,4,5]?.map((item:any,index:any)=>{
            return (
                <div key={index} className='CountCard'>
                <i><FaMoneyBill/></i>
                <h4>الطالبات</h4>
                <h6>932</h6>
        </div>
            )
        })}
        </div>
        {/* <Image src='../Home/HomeCounter.png'/> */}
    </div>
  )
}

export default CountSection