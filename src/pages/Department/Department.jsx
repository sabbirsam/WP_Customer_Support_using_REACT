// import React from 'react'
import DataTableStaff from '../../components/Data-Table-Staff/DataTableStaff'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./department.scss";

const Department = () => {
  return (
    <div className='wcs_home'>
      <Sidebar/>
        <div className="wcs_homeContainer">
            <Navbar/>
            <div className="addTicketbtn_d">ADD DEPARTMENT</div>
            <DataTableStaff/>
           
        </div>
  </div>
  )
}

export default Department