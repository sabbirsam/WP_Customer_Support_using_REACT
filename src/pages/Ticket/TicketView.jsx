import "./ticketview.scss";

const TicketView = ({ticketNum}) => {
  console.log(ticketNum)
  return (
    <div className="wcs_view_ticket" id="wcs_view_ticket">
    <div className="wcs_tickets_container">
      <h2>View Ticket</h2>
    </div>
  </div>
  )
}

export default TicketView