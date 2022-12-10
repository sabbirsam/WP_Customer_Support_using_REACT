// import React from 'react'
import DataTableUser from '../../components/Data-Table_User/DataTableUser'
import AddCustomer from './AddCustomer';
// import Spinner from '../../components/Spinner/Spinner';
import { useState } from "react";
import "./customer.scss"

const Customer = () => {
  const [AddCustomers, setAddCustomer] = useState(0);

  const toggleTab = (index) => {
    setAddCustomer(index);
  };

  return (

    <div className="customer_active" id='wcs_customer'>
      {AddCustomers === 0 && <div className={AddCustomers === 1 ? "add_customer active" : "add_customer"} onClick={() => toggleTab(1)} >ADD CUSTOMER</div> }
       {AddCustomers === 1 && <div className={AddCustomers === 1 ? "add_customer active" : "add_customer"} onClick={() => toggleTab(0)} >BACK</div>}
       
       {AddCustomers === 0 && <DataTableUser/>}
       {AddCustomers === 1 && <AddCustomer/>}
    </div>
   
  )
}

export default Customer