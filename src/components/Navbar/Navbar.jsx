// import React from 'react'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className='wcs_navbar'>
            <div className="wcs_wrapper">
               <div className="wcs_search">
                  <input type="text" placeholder='search...' />
                  <PersonSearchIcon className='wcs_icon'/>
               </div>
               <div className="wcs_items">
                  <div className="wcs_item">
                      <NotificationsIcon className='wcs_icon'/>
                      <div className="wcs_counter">1</div>
                  </div>
                  <div className="wcs_item">
                      <ChatIcon className='wcs_icon'/>
                      <div className="wcs_counter">2</div>
                  </div>
                  <div className="wcs_item">
                      <LowPriorityIcon className='wcs_icon'/>
                  </div>
               </div>
            </div>
      </div>
  )
}

export default Navbar