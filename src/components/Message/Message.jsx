import "./message.scss";
import Noimage from "../../../assets/img/no_img.png"
import {format} from "timeago.js";



const Message = ({own,chatconversationUsers,time,currentconversationID,loggedUserId}) => {
  // console.log(currentconversationID)

  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
           {own ?"" : <img className="messageImg" src={Noimage} alt="" /> }
            <input type="hidden" id={loggedUserId} />
            <p className="messageText" id={currentconversationID}>{chatconversationUsers}</p>
        </div>
        <div className="messageBottom">{format(time)}</div>
    </div>
  )
}

export default Message