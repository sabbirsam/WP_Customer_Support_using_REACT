import React, { useState, useEffect } from 'react';
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import './data-table-ticket.scss'
import TicketActions from './TicketActions';

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent
}

export const ticketColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user_name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
    },
  
    {
      field: "title",
      headerName: "Title",
      width: 300,
    },
    {
      field: "description",
      headerName: "Description",
      width: 350,
      renderCell: (params) => {
        return ( getText (params.row.description) );
      },
    },

    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus id-${params.row.status}`}>
              {params.row.status ==="0" ? "Open" : params.row.status ==="1" ? "Pending" : params.row.status ==="2" ? "Resolved" : "Close"}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "ACTION",
      width: 200,
      renderCell:params=> <TicketActions {...{params}} />     
    },

  ];
  

const DataTableTicket = () => {
  /**
   * Ticket fetch
   */
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
        columns={ticketColumns}
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