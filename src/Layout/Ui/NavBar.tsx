import React from 'react'
import Image from '../../Components/Ui/Image'
import SearchField from '../../Components/DataTable/SearchField'

const   NavBar = () => {
  return (
    <div className='NavBar'>
        <span className='navbar_link'>
         المدارس \ دمشق
        </span>
       <article>

        <div className='header_search'>
        <SearchField/>
        </div>
        <span className='header_icons'>
       <div>
       <Image src='/Icon/bell.png'  />
       </div>
       <div>
       <Image src='/Icon/gear.png'  />

       </div>

        </span> 
        <div className='header_profile'>
          <span>
              <h6>Nabila A.</h6>
              <p>Admin</p>
          </span>
          <Image src='/Layout/DefultStudentImage.png'  />
          

        </div>

       </article>

    </div>
  )
}

export default NavBar