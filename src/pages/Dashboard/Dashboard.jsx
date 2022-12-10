import WCSWidgets from '../../components/Widgets/WCSWidgets';
import WCSFeatured from '../../components/Featured-chart/WCSFeatured';
import WCSChart from '../../components/Chart/WCSChart';
import Featured from '../../components/Featured-chart/Featured';
import Chart from '../../components/Chart/Chart';
import Widget from '../../components/Widgets/Widget';
import React, {useState, useEffect , useMemo} from "react"
import axios from "axios";
import Spinner from '../../components/Spinner/Spinner';
import Modal from '../../components/Modal/Modal';
import "./dashboard.scss";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [proactive, setProactive] = useState();
  useEffect(() => {
      getProactiveConfirmation();
      }, [proactive]);
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
    <div className="dashboard_active" id='wcs_dashboard'>
      <div className="wcs_dashboard_cls">
        {proactive && proactive =='inactive' ? 
            <div onClick={() => {setModalOpen(true)}}>
              <div className="wcs_widgets wcs_free" >
                <WCSWidgets type="total_staffs" /> 
                <WCSWidgets type="total_users" />
                <WCSWidgets type="total_ticket_close" />
                <WCSWidgets type="todays_new_ticket" />
              </div>
              <div className="wcs_widgets wcs_free">
                <WCSWidgets type="ongoing" />
                <WCSWidgets type="pending" />
                <WCSWidgets type="chatting" />
              </div>
              <div className="wcs_charts wcs_free">
                <WCSFeatured />
                <WCSChart />
              </div>
            </div>
          : ''}
        
        {proactive && proactive =='active' ? 
          <div className="wcs_dashboard_cls">
            <div className="wcs_widgets wcs_pro">
              <Widget type="total_staffs" /> 
              <Widget type="total_users" />
              <Widget type="total_ticket_close" />
              <Widget type="todays_new_ticket" />
            </div>
            <div className="wcs_widgets wcs_pro"  >
              <Widget type="ongoing" />
              <Widget type="pending" />
              <Widget type="chatting" />
            </div>
            <div className="wcs_charts wcs_pro">
              <Featured />
              <Chart />
            </div>
          </div>
        : ''}
         {/* proactive && proactive =='inactive' && <Spinner/> */}
          {modalOpen && <><div class="wcs_popup_overlay"></div> <Modal setOpenModal={setModalOpen} /> </> }
        </div>
      </div>
  )
}

export default Dashboard