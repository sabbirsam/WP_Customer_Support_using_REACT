import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Chat = () => {
  return (
    <div className='wcs_home'>
    <Sidebar/>
    <div className="wcs_homeContainer">
      <Navbar/>
        <div className="wcs_chat_cls" id="wcs_chat">
            <div className="wcs_widgets">
              <h2>Chat</h2>
            </div>
        </div>
    </div>

  </div>
  )
}

export default Chat