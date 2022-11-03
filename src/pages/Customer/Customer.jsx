// import React from 'react'
import DataTableStaff from '../../components/Data-Table-Staff/DataTableStaff'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./customer.scss"

const Customer = () => {
  return (
    <div className='wcs_home'>
      <Sidebar/>
        <div className="wcs_homeContainer">
            <Navbar/>
            <div className="addTicketbtn_c">ADD CUSTOMER</div>
                <DataTableStaff/>
        </div>
    </div>
  )
}

export default Customer