import React from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { IoSchool } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const DetailsCard = () => {
    const navigate = useNavigate()
    const handelclick=()=>{
        navigate("/student/add")
    }
  return (
    <div className='DetailsCard' onClick={()=>handelclick()}>
            <h6>إضافة طالبة</h6>
            <div>
            <IoSchool />
            </div>
    </div>
  )
}

export default DetailsCard