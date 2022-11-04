import DataTableTicket from '../../components/Data-Table-Ticket/DataTableTicket';
import AddTicket from './AddTicket';
import Spinner from '../../components/Spinner/Spinner';
import { useState } from "react";
import "./ticket.scss";

const Ticket = () => {
  const [AddTickate, setAddTickate] = useState(0);

  const toggleTab = (index) => {
    setAddTickate(index);
  };

  return (
   
    <div className="ticket_active" id='wcs_ticket'>
       {AddTickate === 0 && <div className={AddTickate === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleTab(1)} >ADD TICKET</div> }
       {AddTickate === 1 && <div className={AddTickate === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleTab(0)} >BACK</div>}
        {/* <Spinner/> */}
        {AddTickate === 0 && <DataTableTicket/>}
    
        {AddTickate === 1 && <AddTicket/>}
    </div> 

  )
}

export default Ticket