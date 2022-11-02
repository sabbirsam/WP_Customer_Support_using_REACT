import React from 'react'
import DataTableStaff from '../components/Data-Table-Staff/DataTableStaff'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Product = () => {
  return (
    <div className='wcs_home'>
      <Sidebar/>
        <div className="wcs_homeContainer">
            <Navbar/>
            {/* <div className="wcs_staff" id="wcs_staff"> */}
                <DataTableStaff/>
            {/* </div> */}
        </div>
  </div>
  )
}

export default Product