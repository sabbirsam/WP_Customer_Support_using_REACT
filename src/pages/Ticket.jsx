import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Ticket = () => {
  return (
    <div className='wcs_home'>
    <Sidebar/>
      <div className="wcs_homeContainer">
          <Navbar/>
            <div className="wcs_ticket_cls" id="wcs_ticket">
                <div className="wcs_widgets">
                  <h2>Tickets</h2>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Ticket