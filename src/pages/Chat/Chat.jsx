import "./chat.scss";
import Conversation from '../../components/Conversations/conversation';
import Message from "../../components/Message/Message";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, {useState} from "react"

const Chat = () => {
  const [message, setMessage] = useState("");
  
  return (
  <div className="wcs_chat_cls" id="wcs_chat">
      <div className="wcs_Chats">
          <div className="chatMenu">
            <div className="chatMenuWrapper">
              <input type="text" placeholder="Search for users...." className="ChatMenuInput" />
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
            </div>
          </div>
          <div className="chatBox">
              <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                    <Message />
                    <Message own={true}/>
                    <Message/>
                    <Message own={true}/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                    <Message own={true}/>
                </div>
                <div className="chatBoxBottom">
                  {/* <textarea className="chatMessageImput" placeholder="write message...."></textarea>
                  <button className="chatSubmitBtn">Send</button> */}
                  <ReactQuill theme="snow" className="chatMessageImput" name="description" value={message} onChange={setMessage}
                    modules={{ toolbar: [['align','strike','code-block','bold', 'italic','underline','clean'], ['link', 'image']] }}
                  />
                  <button className="chatSubmitBtn">Send</button>
                </div>
              </div>
          </div>
          <div className="chatOnline">
            <div className="chatOnlineWrapper">
              {/* THREE */}
            </div>
          </div>
      </div>
  </div>
  )
}

export default Chat