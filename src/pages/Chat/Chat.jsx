import "./chat.scss";
import Conversation from '../../components/Conversations/conversation';
import Message from "../../components/Message/Message";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, {useState, useEffect, useRef } from "react"
import axios from 'axios'

const Chat = () => {
  const [chatting, setChatting] = useState("");
  const [currentuser, setCurrentUserinfo] = useState([]);
  const [alluser, setALLUser] = useState([]);
  const [chatconversationUsers, setChatConversationUsers] = useState([]);
  const [currentconversationID, setCurrentConversationID] = useState(null);
  const scrollRef = useRef();

  /**
   * Current logged in user information-----------------------------------------------------------------------------------------
   */
  useEffect(() => {
    getLogedInUsers();
  }, []);
  // }, [getLogedInUsers()]);

  function getLogedInUsers() {
      axios.get(`${appLocalizer.apiUrl}/wcs/v1/uid`,{
        headers:{
          'content-type': 'application/json',
          'X-WP-NONCE':appLocalizer.nonce
        }},).then(function(response) {
        setCurrentUserinfo(response.data);
    });
    }
  // console.log(currentuser[0]) // id

  /**
   * Get all usets-----------------------------------------------------------------------------------------
   */
   useEffect(() => {
       getUsers();
   }, []);
  //  }, [getUsers()]);

   function getUsers() { //http://localhost/wppool/chatbox/wp-json/wcs/v1/users
       axios.get(`${appLocalizer.apiUrl}/wcs/v1/users`,{
        headers:{
          'content-type': 'application/json',
          'X-WP-NONCE':appLocalizer.nonce
        }},).then(function(response) {
         setALLUser(response.data);
    });
  }
  // console.log(alluser)

  /**
   * Fetch conversation by selected user and chat owner
   */
  
    useEffect(()=>{
      const getConversations = async () =>{
        try{
          const res = await axios.get(`${appLocalizer.apiUrl}/wcs/v1/conversation?receiverId=${currentconversationID}`,{
            headers:{
              'content-type': 'application/json',
              'X-WP-NONCE':appLocalizer.nonce
            }},).then(function(response) {
              setChatConversationUsers(response.data);
          });
        } catch(err){
          console.log(err)
        }
      };
      getConversations();
    },[currentconversationID]);

    
    useEffect(()=>{
      setTimeout(() =>scrollRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    },[chatconversationUsers])

  /**
    * On submit the conversation
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
              {
                alluser.map(c=>(
                  <div onClick={()=> setCurrentConversationID(c.data.ID)}>
                      <Conversation users={c}/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="chatBox">
              <div className="chatBoxWrapper">
              {
                  currentconversationID ? 
                <>
                <div className="chatBoxTop">

                  {
                    chatconversationUsers.map((m)=>(
                      <div ref={scrollRef}>
                        <Message own={m.senderId !== currentuser[0]} chatconversationUsers={m.message} time={m.date_created} currentconversationID={currentconversationID} loggedUserId={currentuser[0]}/>
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