// import React from 'react'
import DataTableStaff from '../../components/Data-Table-Staff/DataTableStaff'
import "./customer.scss"

const Customer = () => {
  return (

    <div className="customer_active" id='wcs_customer'>
      <div className="addTicketbtn_c">ADD CUSTOMER</div>
          <DataTableStaff/>
    </div>
   
  )
}

export default Customer