import React, { useState, useEffect } from 'react';
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import './data-table-ticket.scss'

export const ticketColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user_name",
      headerName: "Name",
      width: 250,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
  
    {
      field: "title",
      headerName: "Title",
      width: 550,
    },

    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
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
  
  // let current_origin = window.location.origin;
  // console.log(current_origin)
  // let path = window.location.pathname;
  // let c = path.substring(16, path.indexOf('/'));
  // console.log(current_origin + c)

  // const trimSlashes =  path.split('/').filter(v => v !== '').join('/');
  // console.log(trimSlashes)

  

const DataTableTicket = () => {
 
  const [users, setUsers] = useState([]);
      useEffect(() => {
          getUsers();
      }, [getUsers()]);
      function getUsers() {
          axios.get('http://localhost/wppool/chatbox/wp-json/wcs/v1/tickets').then(function(response) {
              setUsers(response.data);
      });
  }

  return (
    <div className='wcs_datatable_staff'>
      <DataGrid
        columns={ticketColumns.concat(actionColumns)}
        rows={users}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default DataTableTicket