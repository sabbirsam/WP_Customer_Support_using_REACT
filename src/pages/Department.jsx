import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Department = () => {
  return (
    <div className='wcs_home'>
          <Sidebar/>
          <div className="wcs_homeContainer">
            <Navbar/>
            <div className="wcs_department_cls" id="wcs_department">
              <div className="wcs_widgets">
              <h2>Department</h2>
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default Department