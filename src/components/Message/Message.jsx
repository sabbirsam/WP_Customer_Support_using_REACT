import "./message.scss";
import Noimage from "../../../assets/img/no_img.png"

const Message = ({own}) => {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img className="messageImg" src={Noimage} alt="" />
            <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus</p>
        </div>
        <div className="messageBottom">1 Hour ago</div>
    </div>
  )
}

export default Message