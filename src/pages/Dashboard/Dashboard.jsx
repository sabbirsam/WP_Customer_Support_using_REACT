// import React from 'react'
import "./dashboard.scss";
import Featured from '../../components/Featured-chart/Featured';
import Chart from '../../components/Chart/Chart';
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Widget from '../../components/Widgets/Widget';


const Dashboard = () => {
  return (
    <div className='wcs_home'>
          <Sidebar/>
          <div className="wcs_homeContainer">
            <Navbar/>
              <div className="wcs_dashboard_cls" id='wcs_dashboard'>
                  {/* widgets container and prop sending */}
                    <div className="wcs_widgets">
                      <Widget type="total_staffs"/> 
                      <Widget type="total_users"/>
                      <Widget type="total_ticket_close"/>
                      <Widget type="todays_new_ticket"/>
                    </div>

                    <div className="wcs_widgets">
                      <Widget type="ongoing"/>
                      <Widget type="pending"/>
                      <Widget type="chatting"/>
                    </div>
                    {/* Chart  */}
                    <div className="wcs_charts">
                      <Featured/>
                      <Chart/>
                    </div>
              </div>
          </div>
       
    </div>
  )
}

export default Dashboard