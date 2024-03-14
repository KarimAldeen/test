import React from 'react'
import DetailsCard from '../../Components/Student/DetailsCard'
import Image from '../../Components/Ui/Image'

const DetailsSections = () => {
  return (
    <div className='DetailsSections'>
      
        {[1,2]?.map((item:any , index:number)=>{
          return  (
            <React.Fragment key={index} >
            <DetailsCard  />
            </React.Fragment>
          )
        })}

          <Image src="../Icon/Animation.gif" />
    </div>
  )
}

export default DetailsSections