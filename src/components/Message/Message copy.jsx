import "./message.scss";
import Noimage from "../../../assets/img/no_img.png"

const Message = ({message, own}) => {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img className="messageImg" src={Noimage} alt="" />
            <p className="messageText">{message.message}</p>
            {/* <p className="messageText">Testing Message</p> */}
        </div>
        <div className="messageBottom">1 Hour ago</div>
    </div>
  )
}

export default Message