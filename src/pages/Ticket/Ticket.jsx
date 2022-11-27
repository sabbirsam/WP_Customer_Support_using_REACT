import DataTableTicket from '../../components/Data-Table-Ticket/DataTableTicket';
import AddTicket from './AddTicket';
import TicketView from './TicketView';
import EditTicket from './EditTicket';
import Spinner from '../../components/Spinner/Spinner';
import React, {useState} from "react"
import {TicketviewContext} from "../../contexts/TicketviewContext"
import {TicketeditContext} from "../../contexts/TicketeditContext"

import "./ticket.scss";

const Ticket = () => {
  let current_page = window.location.origin + window.location.pathname
  // console.log(current_page)
 
  /**
   * View ticket
   */
   const [view, setView] = useState(null); 
   /**
   * Edit ticket
   */
    const [edit, setEdit] = useState(null); 
    // console.log("From tickets: "+ edit);
   
  /**
   * Add ticket
   */
  const [AddTickate, setAddTickate] = useState(0);
  const toggleTab = (index) => {
    setAddTickate(index);
  };
  const toggleClose = (index) => {
    setView(null);
    setEdit(null);
    setAddTickate(index);
  };

  return (
   
    <div className="ticket_active" id='wcs_ticket'>
       
      <TicketviewContext.Provider value={{view, setView}}> 
        <TicketeditContext.Provider value={{edit, setEdit}}> 
            {/* Back and Add  */}
            {view ? <div className={AddTickate === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleClose(0)} >Back</div> : 
            edit ? <div className={AddTickate === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleClose(0)} >Back</div> : 
            AddTickate === 0 &&  <div className={AddTickate === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleTab(1)} >ADD TICKET</div>}
            {AddTickate === 1 && <div className={AddTickate === 1 ? "add_ticket active" : "add_ticket"} onClick={() => toggleTab(0)} >BACK</div>}

            {/* Content  */}
            {AddTickate === 1 && <AddTicket/>}
            {view ? <TicketView ticketNum={view}/> : edit ? <EditTicket ticketNum={edit}/> : AddTickate === 0 && <DataTableTicket/>}

        </TicketeditContext.Provider>
      </TicketviewContext.Provider>
    </div> 
  )
}

export default Ticket