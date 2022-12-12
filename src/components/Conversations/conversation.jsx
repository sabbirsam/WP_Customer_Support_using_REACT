import "./conversation.scss";
import Noimage from "../../../assets/img/no_img.png"
import React, {useState, useEffect} from "react"
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import axios from "axios";

const conversation = ({users}) => {
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
    <>
    {proactive && proactive =='active' ? 
      <div className="conversation">
          <img className="conversationImage" src={Noimage} alt="" />
          <span className="conversationName" id={users.data.ID}>{users.data.display_name ? users.data.display_name : "Not Found"}</span>
      </div>
    : 
    <> 
      <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      </Box>
    </>
    }

    {proactive && proactive =='inactive' ?
      <div className="conversation">
          <img className="conversationImage" src={Noimage} alt="" />
          <span className="conversationName">Jon Doe</span>
      </div>
    : ''}
    </> 

    /* proactive =='active' ?
    <>
    <div className="conversation">
        <img className="conversationImage" src={Noimage} alt="" />
        <span className="conversationName" id={users.data.ID}>{users.data.display_name}</span>
    </div>
    </>
    :
    <>
    <div className="conversation">
        <img className="conversationImage" src={Noimage} alt="" />
        <span className="conversationName">DEMO</span>
    </div>
    </>  */



    // <div className="conversation">
    //   {users.data.ID ?
    //   <>
    //     <img className="conversationImage" src={Noimage} alt="" />
    //     <span className="conversationName" id={users.data.ID}>{users.data.display_name}</span>
    //   </> : 
    //   <>
    //     <img className="conversationImage" src={Noimage} alt="" />
    //     <span className="conversationName" id={users.data.ID}>No user found</span>
    //   </>
    //   }
    // </div>

  )
}

export default conversation