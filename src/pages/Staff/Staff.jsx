// import React from 'react'
import DataTableStaff from '../../components/Data-Table-Staff/DataTableStaff'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./staff.scss";

const Staff = () => {
  return (
    <div className='wcs_home'>
      <Sidebar/>
        <div className="wcs_homeContainer">
            <Navbar/>
            <div className="staff_active" id='wcs_staff'>
                <div className="addTicketbtn_s">ADD STAFF</div>
                <DataTableStaff/>
            </div>
        </div>
  </div>
  )
}

export default Staff