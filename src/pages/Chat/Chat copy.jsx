import "./chat.scss";
import Conversation from '../../components/Conversations/conversation';
import Message from "../../components/Message/Message";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, {useState, useEffect} from "react"
import axios from 'axios'

const Chat = () => {
      //quil set
      const [chatting, setChatting] = useState("");

      //uid and logged in user info
      const [uidinfo, setUidinfo] = useState([]);

      // conversation Ids has sender and reciver ids 
      const [conversation, setConversation] = useState([]);


      // now on chat panel show the selected chat and its message
      const [currentconversation, setCurrentConversation] = useState(null);
      const [chatmessages, setChatMessages] = useState([]);

      const [user, setUser] = useState([]);
      // console.log(currentchat)

      /**
       * Get all users and their ID
       */
       useEffect(() => {
           getUsers();
       }, [getUsers()]);
  
        function getUsers() {
              // setLoading=true;
              // {setLoading === true ?? <Spinner/>}
            // axios.get('http://localhost/wppool/chatbox/wp-json/wcs/v1/users').then(function(response) {
            axios.get(`${appLocalizer.apiUrl}/wcs/v1/users`).then(function(response) {
              // setLoading=false;
              setUser(response.data);
        });
      }
      // console.log(user)
      
      // {
      //   user.map(c=>(
      //     console.log(c.roles) //"subscriber"
      //   ))
      // }


      /**
       * Get all Conversation
       */
        useEffect(() => {
          getUid();
        }, []);
        function getUid() {
            axios.get(`${appLocalizer.apiUrl}/wcs/v1/uid`,{
              headers:{
                'content-type': 'application/json',
                'X-WP-NONCE':appLocalizer.nonce
              }
            }).then(function(response) {
              // setLoading=false;
              setUidinfo(response.data);
          });
        }
 
        // console.log(uidinfo[2])
        // {
        //   uidinfo.map(c=>(
        //     console.log(c) //"subscriber"
        //   ))
        // }
     


      /**
       * Get message and conversation ID
       */
      useEffect(() => {
          getConversation();
      }, []);

      function getConversation() {
            // setLoading=true;
            // {setLoading === true ?? <Spinner/>}
          // axios.get('http://localhost/wppool/chatbox/wp-json/wcs/v1/conversation').then(function(response) {
          axios.get(`${appLocalizer.apiUrl}/wcs/v1/conversation`,{
            headers:{
              'content-type': 'application/json',
              'X-WP-NONCE':appLocalizer.nonce
            }
          }).then(function(response) {
            // setLoading=false;
            setConversation(response.data);
      });
  }
  // console.log("conversation")
  // console.log(conversation)

  
  return (
  <div className="wcs_chat_cls" id="wcs_chat">
      <div className="wcs_Chats">
          <div className="chatMenu">
            <div className="chatMenuWrapper">
              <input type="text" placeholder="Search for users...." className="ChatMenuInput" />
                  
                  {
                    //side active user list
                    user.map(c=>(
                      <div onClick={()=> setCurrentConversation(c.data.ID)}>
                      <Conversation conversation={c}/>
                      </div>
                    ))
                  }
            </div>
          </div>
          <div className="chatBox">
              <div className="chatBoxWrapper">
                {
                  currentconversation ? 
                <>
                <div className="chatBoxTop">
                  {
                    conversation.map((m)=>(
                      <Message message={m} own={m.senderId !== uidinfo[0] } user={user}/>
                    ))
                  }

                </div>
                <div className="chatBoxBottom">
                  <ReactQuill theme="snow" className="chatMessageImput" name="description" value={chatting} onChange={setChatting}
                    modules={{ toolbar: [['align','strike','code-block','bold', 'italic','underline','clean'], ['link', 'image']] }}
                  />
                  <button className="chatSubmitBtn">Send</button>
                </div>
                </> :  <div className="chatBoxTop"> <div className="noConversation">Open a conversation to start chat</div></div> }  
              </div>
          </div>
          <div className="chatOnline">
            <div className="chatOnlineWrapper">
              {/* THREE */}
              <h1 className="pluginName"></h1>
            </div>
          </div>
      </div>
  </div>
  )
}

export default Chat