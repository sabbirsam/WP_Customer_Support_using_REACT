import React, { useState, useEffect } from 'react';
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
// import Spinner from '../../components/Spinner/Spinner';
import './data-table.staff.scss'
import image from '../../../assets/img/no_img.png'
import { format } from "date-fns";

export const userColumns = [
  { field: "ID", headerName: "ID", width: 70 }, 
  {
    field: "user_login",
    headerName: "Username",
    width: 200,
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
    width: 250,
    renderCell: (params) => {
      return (params.row.data.display_name);
    },
  },

  {
    // field: "user_status",
    field: "user_email",
    headerName: "Email",
    width: 280,
    renderCell: (params) => {
      return (params.row.data.user_email);
    },
  },
  
  {

    field: "user_registered",
    headerName: "Registered",
    width: 200,
    renderCell: (params) => {
      return (format(new Date(params.row.data.user_registered), "MMMM do, yyyy H:mma"));
    },
  },

  {
    // field: "user_status",
    field: "user_status",
    headerName: "Status",
    width: 160,
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
    width: 150,
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


          // function getUsers() {
          //   axios.get(`${appLocalizer.apiUrl}/wcs/v1/staff`,{
          //       headers:{
          //       'content-type': 'application/json',
          //       'X-WP-NONCE':appLocalizer.nonce
          //       }},).then(function(response) {
          //         setstaff(response.data);
          //       });
          //   }
          //   getUsers();
          //   console.log(staff)
          console.log(staff)

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
        
      />
    </div>
  )
}

export default DataTableStaff