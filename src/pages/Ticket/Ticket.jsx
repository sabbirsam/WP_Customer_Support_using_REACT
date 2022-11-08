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
  const toggleClose = (index) => {
    setView(null);
    setAddTickate(index);
  };

  return (
   
    <div className="ticket_active" id='wcs_ticket'>
       
       <TicketviewContext.Provider value={{view, setView}}> 
          {/* Back and Add  */}
          {view ? <div className={AddTickate === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleClose(0)} >Back</div> : 
          AddTickate === 0 &&  <div className={AddTickate === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleTab(1)} >ADD TICKET</div>}
          {AddTickate === 1 && <div className={AddTickate === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleTab(0)} >BACK</div>}

          {/* Content  */}
          {AddTickate === 1 && <AddTicket/>}
          {view ? <TicketView ticketNum={view}/> : AddTickate === 0 && <DataTableTicket/>}

        </TicketviewContext.Provider>
    </div> 
  )
}

export default Ticket