import DataTableTicket from '../../components/Data-Table-Ticket/DataTableTicket';
// import AddTicket from './AddTicket';
import "./ticket.scss";

const Ticket = () => {
  return (
   
    <div className="ticket_active" id='wcs_ticket'>
        <div className="addTicketbtn_tic">ADD TICKET</div>
        <DataTableTicket/>
        {/* <AddTicket/> */}
    </div> 

  )
}

export default Ticket