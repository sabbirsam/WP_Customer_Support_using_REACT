import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Customer = () => {
  return (
    <div className='wcs_home'>
    <Sidebar/>
      <div className="wcs_homeContainer">
          <Navbar/>
          <div className="wcs_customer_cls" id="wcs_customer">
              <div className="wcs_widgets">
                <h2>Customer</h2>
              </div>
          </div>
      </div>
</div>
  )
}

export default Customer