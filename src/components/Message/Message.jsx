import "./message.scss";
import Noimage from "../../../assets/img/no_img.png"
import {format} from "timeago.js";
import React, {useState, useEffect} from "react"
import axios from "axios";



const Message = ({own,chatconversationUsers,time,currentconversationID,loggedUserId}) => {
  const [proactive, setProactive] = useState('inactive');
  useEffect(() => {
    getProactiveConfirmation();
    }, []);
    
    function getProactiveConfirmation() {
        axios.get(`${appLocalizer.apiUrl}/wcs/v1/wcs_pro_active`,{ 
          headers:{
            'content-type': 'application/json',
            'X-WP-NONCE':appLocalizer.nonce
          }},).then(function(response) {
            setProactive(response.data);
      });
    }

  return (
    proactive =='active' ?
    <>
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
           {own ?"" : <img className="messageImg" src={Noimage} alt="" /> }

            <input type="hidden" id={loggedUserId} />

            <p className="messageText" id={currentconversationID}>
              {chatconversationUsers}
            </p>
        </div>
        <div className="messageBottom">{format(time)}</div>
    </div>
    </>
    :
    <>
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
           {own ?"" : <img className="messageImg" src={Noimage} alt="" /> }

            <input type="hidden" />

            <p className="messageText">
              DEMO
            </p>
        </div>
        <div className="messageBottom">10 min ago</div>
    </div>
    </>
  )
}

export default Message
