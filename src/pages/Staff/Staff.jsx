// import React from 'react'
import DataTableStaff from '../../components/Data-Table-Staff/DataTableStaff'
import AddStaff from './AddStaff';
import { useState } from "react";
import "./staff.scss";

const Staff = () => {
  const [AddStaffs, setStaffs] = useState(0);

  const toggleTab = (index) => {
    setStaffs(index);
  };

  return (

    <div className="staff_active" id='wcs_staff'>
    {AddStaffs === 0 && <div className={AddStaffs === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleTab(1)} >ADD STAFF</div> }
    {AddStaffs === 1 && <div className={AddStaffs === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleTab(0)} >BACK</div>}

    {AddStaffs === 0 && <DataTableStaff/>}

    {AddStaffs === 1 && <AddStaff/>}
    </div> 

  )
}

export default Staff