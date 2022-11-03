import DataTableTicket from '../../components/Data-Table-Ticket/DataTableTicket';
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
// import AddTicket from './AddTicket';
import "./ticket.scss";

const Ticket = () => {
  return (
    <div className='wcs_home'>
    <Sidebar/>
      <div className="wcs_homeContainer">
          <Navbar/>
          <div className="addTicketbtn_tic">ADD TICKET</div>
          <DataTableTicket/>
          {/* <AddTicket/> */}
      </div>
</div>
  )
}

export default Ticket