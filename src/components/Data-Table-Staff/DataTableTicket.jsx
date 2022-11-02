import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './data-table-ticket.scss'


export const ticketColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 280,
      renderCell: (params) => {
        return (
          <div className="wcs_cellWithImg">
            <img className="wcs_cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
    },
  
    {
      field: "contact",
      headerName: "Contact",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
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
      width: 300,
      renderCell:(params)=>{
        return(
          <div className="wcs_cellAction">
            <div className="wcs_addButton">ADD</div>
           <div className="wcs_viewButton">VIEW</div>
           <div className="wcs_deleteButton">DELETE</div>
          </div>
        );
      },
    },
  ]
  
  
  export const ticketRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "ongoing",
      email: "customer_snow@gmail.com",
      contact: 3684845,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "customer_2snow@gmail.com",
      status: "ongoing",
      contact: 4684842,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "customer_3snow@gmail.com",
      status: "complete",
      contact: 4684845,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "customer_4snow@gmail.com",
      status: "ongoing",
      contact: 1684846,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "customer_5snow@gmail.com",
      status: "complete",
      contact: 2684842,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "customer_6snow@gmail.com",
      status: "pending",
      contact: 1684845,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "customer_7snow@gmail.com",
      status: "complete",
      contact: 4684844,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "customer_8snow@gmail.com",
      status: "complete",
      contact: 3668484,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "customer_9snow@gmail.com",
      status: "complete",
      contact: 6568484,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "customer_21snow@gmail.com",
      status: "pending",
      contact: 6568484,
    },
  ];

  
const DataTableTicket = () => {
  return (
    <div className='wcs_datatable_staff'>
      <DataGrid
        rows={ticketRows}
        columns={ticketColumns.concat(actionColumns)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default DataTableTicket