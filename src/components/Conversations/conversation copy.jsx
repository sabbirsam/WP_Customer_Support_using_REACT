import "./conversation.scss";
import Noimage from "../../../assets/img/no_img.png"
import React, {useState, useEffect} from "react"
import axios from "axios";

const conversation = ({conversation}) => {
  console.log(conversation.data.image)
  return (
    <div className="conversation">
        {conversation.data.image && 
         <img className="conversationImage" src={conversation.data.image} alt="" />
         ||  <img className="conversationImage" src={Noimage} alt="" />
        }
        <span className="conversationName" id={conversation.data.ID}>{conversation.data.display_name}</span>
        {/* <span className="conversationName">Demo Name</span> */}
    </div>
  )
}

export default conversation