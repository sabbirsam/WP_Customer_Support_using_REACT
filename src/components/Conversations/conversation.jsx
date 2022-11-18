import "./conversation.scss";
import Noimage from "../../../assets/img/no_img.png"

const conversation = () => {
  return (
    <div className="conversation">
        <img className="conversationImage" src={Noimage} alt="" />
        <span className="conversationName">Sabbir Ahmed</span>
    </div>
  )
}

export default conversation