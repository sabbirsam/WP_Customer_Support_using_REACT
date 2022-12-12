import React, { useState, useEffect } from 'react';
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import './data-table-ticket.scss'
import TicketActions from './TicketActions';
// import UseFullPageLoader from '../../hooks/UseFullPageLoader';

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent
}

export const ticketColumns = [
    /* { field: "1", 
    headerName: "#", 
    flex: 0.1,
    }, */
    { field: "id", 
    headerName: "ID", 
    // width: 70 
    flex: 0.1,
    },
    {
      field: "user_name",
      headerName: "Name",
      // width: 150,
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      // width: 220,
      flex: 0.6,
    },
  
    {
      field: "title",
      headerName: "Title",
      // width: 300,
      flex: 0.6,
    },
    {
      field: "description",
      headerName: "Description",
      // width: 350,
      flex: 1.1,
      renderCell: (params) => {
        return ( getText (params.row.description) );
      },
    },

    {
      field: "status",
      headerName: "Status",
      // width: 100,
      flex: 0.5,
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
      // width: 200,
      flex: 1,
      renderCell:params=> <TicketActions {...{params}} />     
    },

  ];
  

const DataTableTicket = () => {
  /**
   * Ticket fetch
   */
  // const [loader, showLoader, hideLoader] = UseFullPageLoader();
  const [users, setUsers] = useState([]);

      useEffect(() => {
          getUsers();
      }, [users]);
      function getUsers() {

          // showLoader();
          axios.get(`${appLocalizer.apiUrl}/wcs/v1/tickets`,{ // wp-json/wcs/v1/tickets
            headers:{
              'content-type': 'application/json',
              'X-WP-NONCE':appLocalizer.nonce
            }},).then(function(response) { 
              // hideLoader();
              setUsers(response.data);
      });
  }

  return (
    <div className='wcs_datatable_staff'>
      {/* {loader} */}
      <DataGrid
        columns={ticketColumns}
        rows={users}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        // loading={users.length === 0}
        // rowHeight={38}
      />
    </div>
  )
}

export default DataTableTicket