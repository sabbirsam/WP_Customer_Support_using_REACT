import "./conversation.scss";
import Noimage from "../../../assets/img/no_img.png"
import React, {useState, useEffect} from "react"
import axios from "axios";

const conversation = ({users}) => {
  return (
    <div className="conversation">
        <img className="conversationImage" src={Noimage} alt="" />
        <span className="conversationName" id={users.data.ID}>{users.data.display_name}</span>
    </div>
    
  )
}

export default conversation