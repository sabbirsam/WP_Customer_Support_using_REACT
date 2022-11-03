// import React from 'react'
import DataTableStaff from '../../components/Data-Table-Staff/DataTableStaff'
import "./department.scss";

const Department = () => {
  return (
    <div className="department_active" id='wcs_department'>
        <div className="addTicketbtn_d">ADD DEPARTMENT</div>
        <DataTableStaff/>
    </div>

  )
}

export default Department