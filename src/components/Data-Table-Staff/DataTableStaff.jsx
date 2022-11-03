// import * as React from 'react'; 
import { DataGrid } from '@mui/x-data-grid';
import './data-table.staff.scss'

export const userColumns = [
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
         <div className="wcs_viewButton">VIEW</div>
         <div className="wcs_deleteButton">DELETE</div>
        </div>
      );
    },
  },
]


export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "inactive",
    email: "wppool_snow@gmail.com",
    contact: 3684845,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "wppool_2snow@gmail.com",
    status: "active",
    contact: 4684842,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "wppool_3snow@gmail.com",
    status: "active",
    contact: 4684845,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "wppool_4snow@gmail.com",
    status: "active",
    contact: 1684846,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "wppool_5snow@gmail.com",
    status: "active",
    contact: 2684842,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "wppool_6snow@gmail.com",
    status: "inactive",
    contact: 1684845,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "wppool_7snow@gmail.com",
    status: "active",
    contact: 4684844,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "wppool_8snow@gmail.com",
    status: "active",
    contact: 3668484,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "wppool_9snow@gmail.com",
    status: "active",
    contact: 6568484,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "wppool_21snow@gmail.com",
    status: "inactive",
    contact: 6568484,
  },
  
];



const DataTableStaff = () => {
  return (
    <div className='wcs_datatable_staff'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumns)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        
      />
    </div>
  )
}

export default DataTableStaff