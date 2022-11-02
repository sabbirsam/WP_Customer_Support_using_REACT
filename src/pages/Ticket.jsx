import React from 'react'
import DataTableTicket from '../components/Data-Table-Staff/DataTableTicket'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Ticket = () => {
  return (
    <div className='wcs_home'>
    <Sidebar/>
      <div className="wcs_homeContainer">
          <Navbar/>
          {/* <div className="wcs_staff" id="wcs_staff"> */}
              <DataTableTicket/>
          {/* </div> */}
      </div>
</div>
  )
}

export default Ticket