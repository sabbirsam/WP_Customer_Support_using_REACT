import DataTableTicket from '../../components/Data-Table-Ticket/DataTableTicket';
import AddTicket from './AddTicket';
import TicketView from './TicketView';
import Spinner from '../../components/Spinner/Spinner';
import React, {useState} from "react"
import {TicketviewContext} from "../../contexts/TicketviewContext"

import "./ticket.scss";

const Ticket = () => {

 
  /**
   * View ticket
   */
   const [view, setView] = useState(null); 
   
  /**
   * Add ticket
   */
  const [AddTickate, setAddTickate] = useState(0);
  const toggleTab = (index) => {
    setAddTickate(index);
  };

  return (
   
    <div className="ticket_active" id='wcs_ticket'>
        {/* {AddTickate === 0 &&  <div className={AddTickate === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleTab(1)} >ADD TICKET</div> }
        {AddTickate === 1 && <div className={AddTickate === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleTab(0)} >BACK</div>} */}
        {/* Show table data page and it remove as its add below*/}
        {/* {AddTickate === 0 && <DataTableTicket/>} */}

        {/* Show add table page */}
       

        {/* view ticekt page  */}
       <TicketviewContext.Provider value={{view, setView}}> 
          
          {AddTickate === 0 &&  <div className={AddTickate === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleTab(1)} >ADD TICKET</div> }
          {AddTickate === 1 && <div className={AddTickate === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleTab(0)} >BACK</div>}

          {AddTickate === 1 && <AddTicket/>}
          {view ? <TicketView ticketNum={view}/> : AddTickate === 0 && <DataTableTicket/>}

        </TicketviewContext.Provider>
    </div> 
  )
}

export default Ticket