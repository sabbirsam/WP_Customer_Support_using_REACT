// import React from 'react'
import DataTableStaff from '../../components/Data-Table-Staff/DataTableStaff'
import "./staff.scss";

const Staff = () => {
  return (
    <div className="staff_active" id='wcs_staff'>
        <div className="addTicketbtn_s">ADD STAFF</div>
        <DataTableStaff/>
    </div>

  )
}

export default Staff