import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import Staff from "../Staff/Staff";
import Customer from "../Customer/Customer";
import Ticket from "../Ticket/Ticket";
import Chat from "../Chat/Chat";
import WCSChat from "../Chat/WCSChat";
import "./tab.scss";
import "./sidebar.scss";

let current_page = window.location.pathname;
const WCSTab = () => {
    
    const [proactive, setProactive] = useState('inactive');
    const [currentuser, setCurrentUserinfo] = useState([]);
    const [frontview, setFrontView] = useState(true);
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
    useEffect(()=>{
         const getTabstatus = async () =>{
                 const res = await axios.get(`${appLocalizer.apiUrl}/wcs/v1/uid`,{
                     headers:{
                     'content-type': 'application/json',
                     'X-WP-NONCE':appLocalizer.nonce
                     }},).then(function(response) {
                        setCurrentUserinfo(response.data);
                 });
             }; 
            getTabstatus()   
     },[frontview]);


    const capability = currentuser[4]
    const isAdmin = useMemo(() => currentuser[4], [capability])
    // console.log(isAdmin)

    const TabIndex = (useMemo(() => isAdmin ==='administrator' ? 1  : 4));
    // const TabIndex = (isAdmin ==='administrator' ? 1  : 4);
    // console.log(TabIndex)

    // const [toggleState, setToggleState] = useState( useMemo(() => isAdmin ==='administrator' ? 1  : 4, [isAdmin]) );
    const [toggleState, setToggleState] = useState(TabIndex);
    // const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
        setFrontView(toggleState);
    };


  return (
      <div className='wcs_home'>
          {/* Here  */}
            <div className='wcs_sidebar'>
                <div className="wcs_top">
                    <span className="wcs_logo"> <a href={current_page + '?page=dashboard_status'} style={{textDecoration:"none"}}>WP SUPPORT SYSTEM</a></span>
                </div>
                <hr />
                <div className="wcs_center">
                  <ul>
                 {/* Check condition  */}       
                {  isAdmin =='administrator' ?<>

                      <p className="wcs_title">
                          MAIN
                      </p>
                      <a className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                          <li className={toggleState === 1 ? "active" : "tabs"}>
                              <DashboardIcon className='wcs_icon'/>
                              <span >Dashboard</span>
                          </li>
                      </a>
                      <a className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                          <li className={toggleState === 2 ? "active" : "tabs"}>
                              <SupportAgentIcon className='wcs_icon'/>
                              <span >Staff</span>
                          </li>
                      </a>
                     
                      <p className="wcs_title">
                          SERVICE
                      </p>

                      <a className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                          <li className={toggleState === 3 ? "active" : "tabs"}>
                              <PeopleAltIcon className='wcs_icon'/>
                              <span >Customer</span>
                          </li>
                      </a>

                </>:"" } 

                      <a className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
                          <li className={toggleState === 4 ? "active" : "tabs"}>
                              <ConfirmationNumberIcon className='wcs_icon'/>
                              <span >Ticket</span>
                          </li>
                      </a>
                      <p className="wcs_title">
                          SUPPORT
                      </p>
                      <a className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>
                          <li className={toggleState === 5 ? "active" : "tabs"}>
                              <MarkUnreadChatAltIcon className='wcs_icon'/>
                              <span >Chat </span>
                          </li>
                      </a>
                  </ul>
            </div>
          </div>

          <div className="wcs_homeContainer">
            <Navbar/>
              <div className="content-tabs">
              {  isAdmin =='administrator' ?<>
                    <div className={toggleState === 1 ? "content  active-content" : "content"}>
                        {toggleState === 1 && <Dashboard/>}
                        {/* <Dashboard/> */}
                    </div>
                    <div className={toggleState === 2 ? "content  active-content" : "content"}>
                        {toggleState === 2 &&  <Staff/>}
                    </div>
                    
                    <div className={toggleState === 3 ? "content  active-content" : "content"}>
                        {toggleState === 3 && <Customer/>}
                    </div>
                </>:"" } 

                <div className={toggleState === 4 ? "content  active-content" : "content"}>
                    {toggleState === 4 &&  <Ticket/>}
                </div>
                <div className={toggleState === 5 ? "content  active-content" : "content"}>
                {  proactive =='active' ?
                    toggleState === 5 &&  <Chat/>
                    :
                    toggleState === 5 &&  <WCSChat/>
                } 
                </div>
              </div>
          </div>
    </div>

  )
}

export default WCSTab