import Conversation from '../../components/Conversations/conversation';
import Message from "../../components/Message/Message";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, {useState, useEffect, useRef } from "react"
import {Box, TextField, MenuItem} from '@mui/material';
import Modal from '../../components/Modal/Modal';
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import "./chat.scss";

const Chat = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
  <div className="wcs_chat_cls" id="wcs_chat">
      <div className="wcs_Chats"  onClick={() => {setModalOpen(true)}}>
          <div className="chatMenu chatMenuFree">
          <h4 className='pro_badge'>PRO</h4>
            <div className="chatMenuWrapper chatfreeWrapper">
              <input type="text" placeholder="Search for users...." className="ChatMenuInput" />
              <div className="chatBoxUser">
              <Conversation/>
            </div>
            </div>
          </div>
          <div className="chatBox">
              <h4 className='pro_badge'>PRO</h4>
              <div className="chatBoxWrapper chatfreeWrapper">
                <div className="chatBoxTop chatfreeWrapper">
                  <Message/>
                  <Message own={true}/>
                </div>
                <div className="chatBoxBottom">
                  <ReactQuill theme="snow" className="chatMessageImput" name="description" readOnly
                    modules={{ toolbar: [['align','strike','code-block','bold', 'italic','underline','clean'], ['link', 'image']] }}
                  />
                  {/* no need the below hidden filed */}
                  <button className="chatSubmitBtn" disabled>Send</button>
                </div>
              </div>
            </div>
            <div className="chatOnline">
            {/* <h4 className='pro_badge'>PRO</h4> */}
              <div className="chatOnlineWrapper chatfreeWrapper">
                <Box width='250px' className='selectFields chatfreeWrapper'>
                    <TextField label="Select Capabilities" select fullWidth className='chatfreeWrapper' disabled>
                        <MenuItem value="subscriber" className='chatfreeWrapper'>User</MenuItem>
                        <MenuItem value="editor" className='chatfreeWrapper'>Staff</MenuItem>
                        <MenuItem value="administrator" className='chatfreeWrapper'>Admin</MenuItem>
                    </TextField>
                  </Box>
                <h1 className="pluginName"></h1>
              </div>
            </div>
          </div>
          {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
          {modalOpen && <><div class="wcs_popup_overlay"></div> <Modal setOpenModal={setModalOpen} /> </> }
      </div>
  )
}

export default Chat