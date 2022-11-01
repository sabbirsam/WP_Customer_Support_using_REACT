import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
let current_page = window.location.pathname;


const Sidebar = () => {
    return (
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
                    <a href={current_page + '?page=dashboard_status'} style={{textDecoration:"none"}}>
                        <li>
                            <DashboardIcon className='wcs_icon'/>
                            <span >Dashboard</span>
                        </li>
                    </a>
                    <a href={current_page + '?page=wcs_staff'} style={{textDecoration:"none"}}>
                        <li>
                            <SupportAgentIcon className='wcs_icon'/>
                            <span >Staff</span>
                        </li>
                    </a>
                    <p className="wcs_title">
                        ACCESSORIES
                    </p>
                    <a href={current_page + '?page=wcs_department'} style={{textDecoration:"none"}}>
                        <li>
                            <BrandingWatermarkIcon className='wcs_icon'/>
                            <span > Department</span>
                        </li>
                    </a>

                    <a href={current_page + '?page=wcs_product'} style={{textDecoration:"none"}}>
                        <li>
                            <ProductionQuantityLimitsIcon className='wcs_icon'/>
                            <span >Product</span>
                        </li>
                    </a>

                    <p className="wcs_title">
                        SERVICE
                    </p>

                    <a href={current_page + '?page=wcs_customer'} style={{textDecoration:"none"}}>
                        <li>
                            <PeopleAltIcon className='wcs_icon'/>
                            <span >Customer</span>
                        </li>
                    </a>
                    <a href={current_page + '?page=wcs_tickets'} style={{textDecoration:"none"}}>
                        <li>
                            <ConfirmationNumberIcon className='wcs_icon'/>
                            <span >Ticket</span>
                        </li>
                    </a>
                    <p className="wcs_title">
                        SUPPORT
                    </p>
                    <a href={current_page + '?page=wcs_chat'} style={{textDecoration:"none"}}>
                        <li>
                            <MarkUnreadChatAltIcon className='wcs_icon'/>
                            <span >Chat </span>
                        </li>
                    </a>

                </ul>
           </div>
           {/* <div className="wcs_bottom">Color Option</div> */}
        </div>
     );
}
export default Sidebar;