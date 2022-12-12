import Conversation from '../../components/Conversations/conversation';
import Message from "../../components/Message/Message";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, {useState, useEffect, useRef } from "react"
import {Box, TextField, MenuItem} from '@mui/material';
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import "./chat.scss";

const Chat = () => {
  const [chatting, setChatting] = useState("");
  const [currentuser, setCurrentUserinfo] = useState([]);
  const [alluser, setALLUser] = useState([]);
  const [chatconversationUsers, setChatConversationUsers] = useState([]);
  const [shownewmessage, setShownewmessage] = useState([]);
  const [currentconversationID, setCurrentConversationID] = useState(null);
  const scrollRef = useRef();
  const [capabilitiesId, setCapabilities] = useState('subscriber');

  /**
   * 
   * @param {Check cuttent user capabilities} event 
   */
  const handleChange = (event) => {
    setCapabilities(event.target.value);
  };
  // console.log(capabilitiesId)


  /**
   * Current logged in user information
   * 0:ID,1:name,2:gravatar,3:mail,4:capabilities,5:DATA[]
   */
  useEffect(() => {
    getLogedInUsers();
  }, [currentuser]);
  function getLogedInUsers() {
      axios.get(`${appLocalizer.apiUrl}/wcs/v1/uid`,{
        headers:{
          'content-type': 'application/json',
          'X-WP-NONCE':appLocalizer.nonce
        }},).then(function(response) {
        setCurrentUserinfo(response.data);
    });
    }
    const capability = currentuser[4]

  /**
   * Get all users based on selected capabilites but not for users. 
   * Under condition
   */
   useEffect(() => {
       getUsers();
   }, [capabilitiesId]);
   function getUsers() { //http://localhost/wppool/chatbox/wp-json/wcs/v1/users
       axios.get(`${appLocalizer.apiUrl}/wcs/v1/chat_users?capabilitiesId=${capabilitiesId}`,{
        headers:{
          'content-type': 'application/json',
          'X-WP-NONCE':appLocalizer.nonce
        }},).then(function(response) {
         setALLUser(response.data);
    });
  }
  /**
   * Fetch conversation by selected user and chat owner
   */
      useEffect(() => {
        getConversations();
      }, [currentconversationID,shownewmessage]); 
      function getConversations() {
        const c = axios.get(`${appLocalizer.apiUrl}/wcs/v1/conversation?receiverId=${currentconversationID}`,{
            headers:{
              'content-type': 'application/json',
              'X-WP-NONCE':appLocalizer.nonce
            }},).then(function(response) {
              setChatConversationUsers(response.data);
              setShownewmessage(c)
        });
      }

    /**
     * To Get the last message makesure getConversations || get_conversation is ASC selected
     */

    // useEffect(()=>{
    //   setTimeout(() =>scrollRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    // },[chatconversationUsers])




  /**
    * On submit the conversation
    * Reply chat
    */
   const handleSubmit = async e => {
    e.preventDefault();
    var cuid = ''
    cuid = currentuser[0]

    const url = `${appLocalizer.apiUrl}/wcs/v1/conversation`;
    try{
      const res = await axios.post(url, {
        //currentconversationID => receiver, cuid=> sender
        currentconversationID,cuid,chatting
      }, {
        headers:{
          'content-type': 'application/json',
          'X-WP-NONCE':appLocalizer.nonce
        }
      }).then(function(res) {
        setChatting("");
      });
      
    } catch(err){
      console.log(err);
    }
 }


  return (
  <div className="wcs_chat_cls" id="wcs_chat">
      <div className="wcs_Chats">
          <div className="chatMenu">
            <div className="chatMenuWrapper">
              <input type="text" placeholder="Search for users...." className="ChatMenuInput" />
              <div className="chatBoxUser">
              {
                alluser.map(c=>(
                  <div onClick={()=> setCurrentConversationID(c.data.ID)}>
                      <Conversation key={c.data.ID} users={c}/>
                  </div>
                ))
              }
            </div>
            </div>
          </div>
          <div className="chatBox">
              <div className="chatBoxWrapper">
              {
                  currentconversationID ? 
                <>
                <div className="chatBoxTop">

                  {
                    chatconversationUsers.map(m=>(
                      <div ref={scrollRef}>
                        <Message key={m.senderId} own={m.senderId == currentuser[0]} chatconversationUsers={m.message} time={m.date_created} currentconversationID={currentconversationID} loggedUserId={currentuser[0]}/>
                      </div>
                    ))
                  }

                </div>
                <div className="chatBoxBottom">
                  <ReactQuill theme="snow" className="chatMessageImput" name="description" value={chatting} onChange={setChatting}
                    modules={{ toolbar: [['align','strike','code-block','bold', 'italic','underline','clean'], ['link', 'image']] }}
                  />
                  {/* no need the below hidden filed */}
                  <input type="hidden" cid={currentconversationID} uid={currentuser[0]} /> 
                  <button className="chatSubmitBtn" onClick={handleSubmit}>Send</button>
                </div>
                </> :  <div className="chatBoxTop"> <div className="noConversation">Open a conversation to start chat</div></div> } 
              </div>
          </div>
          {capability =='administrator' || capability =='editor' ? 
          <>
            <div className="chatOnline">
              <div className="chatOnlineWrapper">
                <Box width='250px' className='selectFields'>
                    <TextField label="Select Capabilities" select value={capabilitiesId} onChange={handleChange} fullWidth>
                        <MenuItem value="subscriber">User</MenuItem>
                        <MenuItem value="editor">Staff</MenuItem>
                        <MenuItem value="administrator">Admin</MenuItem>
                    </TextField>
                  </Box>
                <h1 className="pluginName"></h1>
              </div>
            </div>
          </> : ""}
      </div>
  </div>
  )
}

export default Chat