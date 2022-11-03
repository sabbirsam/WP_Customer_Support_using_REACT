import { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Staff from "../../pages/Staff/Staff";
import Department from "../../pages/Department/Department";
import Product from "../../pages/Product/Product";
import Customer from "../../pages/Customer/Customer";
import Ticket from "../../pages/Ticket/Ticket";
import Chat from "../../pages/Chat/Chat";
import "./tab.scss";
import "./sidebar.scss";


let current_page = window.location.pathname;

const WCSTab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
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
                      <p className="wcs_title">
                          MAIN
                      </p>
                      <a className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                          <li>
                              <DashboardIcon className='wcs_icon'/>
                              <span >Dashboard</span>
                          </li>
                      </a>
                      <a className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                          <li>
                              <SupportAgentIcon className='wcs_icon'/>
                              <span >Staff</span>
                          </li>
                      </a>
                      <p className="wcs_title">
                          ACCESSORIES
                      </p>
                      <a className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                          <li>
                              <BrandingWatermarkIcon className='wcs_icon'/>
                              <span > Department</span>
                          </li>
                      </a>

                      <a className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
                          <li>
                              <ProductionQuantityLimitsIcon className='wcs_icon'/>
                              <span >Product</span>
                          </li>
                      </a>

                      <p className="wcs_title">
                          SERVICE
                      </p>

                      <a className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>
                          <li>
                              <PeopleAltIcon className='wcs_icon'/>
                              <span >Customer</span>
                          </li>
                      </a>
                      <a className={toggleState === 6 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(6)}>
                          <li>
                              <ConfirmationNumberIcon className='wcs_icon'/>
                              <span >Ticket</span>
                          </li>
                      </a>
                      <p className="wcs_title">
                          SUPPORT
                      </p>
                      <a className={toggleState === 7 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(7)}>
                          <li>
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
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    {toggleState === 1 && <Dashboard/>}
                    {/* <Dashboard/> */}
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    {toggleState === 2 &&  <Staff/>}
                </div>
                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    {toggleState === 3 &&  <Department/>}
                </div>
                <div className={toggleState === 4 ? "content  active-content" : "content"}>
                    {toggleState === 4 &&   <Product/>}
                </div>
                <div className={toggleState === 5 ? "content  active-content" : "content"}>
                     {toggleState === 5 && <Customer/>}
                </div>
                <div className={toggleState === 6 ? "content  active-content" : "content"}>
                    {toggleState === 6 &&  <Ticket/>}
                </div>
                <div className={toggleState === 7 ? "content  active-content" : "content"}>
                    {toggleState === 7 &&  <Chat/>}
                </div>
              </div>
          </div>
    </div>

  )
}

export default WCSTab