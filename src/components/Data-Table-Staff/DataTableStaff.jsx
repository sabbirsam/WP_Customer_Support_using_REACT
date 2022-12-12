import React, { useState, useEffect } from 'react';
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
// import Spinner from '../../components/Spinner/Spinner';
import './data-table.staff.scss'
import image from '../../../assets/img/no_img.png'
import { format } from "date-fns";

export const userColumns = [
  // { field: "ID", headerName: "ID", width: 70 }, 
  {
    field: "user_login",
    headerName: "Username",
    // width: 150//200,
    flex: 1,
    renderCell: (params) => {
      return (
        <div className="wcs_cellWithImg">
         {
          params.row.file && <img className="wcs_cellImg" src={params.row.file} alt="staff" /> 
          ||  <img className="wcs_cellImg" src={image} alt="staff" /> 
         }
         {params.row.data.user_login}
        </div>
      );
    },
  },

  {
    // field: "user_status",
    field: "display_name",
    headerName: "Name",
    // width:170//250,
    flex: 1,
    renderCell: (params) => {
      return (params.row.data.display_name);
    },
  },

  {
    // field: "user_status",
    field: "user_email",
    headerName: "Email",
    // width: 210//280,
    flex: 1,
    renderCell: (params) => {
      return (params.row.data.user_email);
    },
  },
  
  {

    field: "user_registered",
    headerName: "Registered",
    // width: 150// 200,
    flex: 1,
    renderCell: (params) => {
      // return (format(new Date(params.row.data.user_registered), "MMMM do, yyyy H:mma")); //December 1st, 2022 13:14PM In
      return (format(new Date(params.row.data.user_registered), "dd-MMM-yy,  H:mm a"));
    },
  },

  {
    // field: "user_status",
    field: "user_status",
    headerName: "Status",
    // width: 160,
    // width: 80,
    flex: 0.5,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus id-${params.row.data.user_status}`}>
          {params.row.data.user_status ==="1" ? "Active" : "Inactive"}
        </div>
      );
    },
  },
];

export const actionColumns = [
  {
    field: "action",
    headerName: "ACTION",
    // width: 150,
    // width: 80,
    flex: 0.5,
    renderCell:(params)=>{
      return(
        <div className="wcs_cellAction">
          <div className="wcs_viewButton" id={params.row.data.ID}>
            <a href={'user-edit.php?user_id=' + params.row.data.ID} style={{textDecoration:"none"}}>EDIT</a>
         </div>
         {/* <div className="wcs_deleteButton">DELETE</div> */}
        </div>
      );
    },
  },
]

const DataTableStaff = () => {

        const [staff, setstaff] = useState([]);
            useEffect(() => {
                getUsers();
            }, []);

            function getUsers() {
                axios.get(`${appLocalizer.apiUrl}/wcs/v1/staff`).then(function(response) {
                  setstaff(response.data);
            });
        }
          // console.log(staff)

  return (
    <div className='wcs_datatable_staff'>
      <DataGrid
        rows={staff}
        columns={userColumns.concat(actionColumns)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={row => row.ID}
        // loading={staff.length === 0}        
      />
    </div>
  )
}

export default DataTableStaff