import React, { useState, useEffect } from 'react';
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
// import Spinner from '../../components/Spinner/Spinner';
import './data-table-user.scss'
import image from '../../../assets/img/no_img.png'

export const userColumns = [
  // { field: "ID", headerName: "ID", width: 70 },
  { field: "id", headerName: "ID", width: 70 },
 
  {
    field: "name",
    // field: "user_login",
    headerName: "Name",
    width: 280,
    renderCell: (params) => {
      return (
        <div className="wcs_cellWithImg">
         {
          params.row.file && <img className="wcs_cellImg" src={params.row.file} alt="staff" /> 
          ||  <img className="wcs_cellImg" src={image} alt="staff" /> 
         }
         {params.row.user_name}
        </div>
      );
    },
  },

  // {
  //   field: "display_name",
  //   headerName: "Display Name",
  //   width: 200,
  // },
  // {
  //   field: "user_email",
  //   headerName: "Email",
  //   width: 300,
  // },
  // {
  //   field: "user_registered",
  //   headerName: "Register date",
  //   width: 160,
  // },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },

  {
    field: "mobile_number",
    headerName: "Mobile",
    width: 200,
  },
  {
    // field: "user_status",
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus id-${params.row.status}`}>
          {params.row.status ==="1" ? "Active" : "Inactive"}
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
         <div className="wcs_viewButton">VIEW</div>
         <div className="wcs_deleteButton">DELETE</div>
        </div>
      );
    },
  },
]

const DataTableStaff = () => {
  // let  setLoading = false;

  const [user, setUser] = useState([]);
      useEffect(() => {
          getUsers();
      }, [getUsers()]);

      function getUsers() {
            // setLoading=true;
            // {setLoading === true ?? <Spinner/>}
          // axios.get('http://localhost/wppool/chatbox/wp-json/wcs/v1/users').then(function(response) {
          axios.get(`${appLocalizer.apiUrl}/wcs/v1/users`).then(function(response) {
            // setLoading=false;
            setUser(response.data);
      });
  }

  return (
    <div className='wcs_datatable_staff'>
      <DataGrid
        rows={user}
        columns={userColumns.concat(actionColumns)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={row => row.id}
      />
    </div>
  )
}

export default DataTableStaff