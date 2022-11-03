// import React from 'react'
import DataTableStaff from '../../components/Data-Table-Staff/DataTableStaff'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./product.scss";

const Product = () => {
  return (
    <div className='wcs_home'>
      <Sidebar/>
        <div className="wcs_homeContainer">
            <Navbar/>
            <div className="addTicketbtn_p">ADD PRODUCT</div>
                <DataTableStaff/>
           
        </div>
  </div>
  )
}

export default Product