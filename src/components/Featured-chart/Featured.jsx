import './featured.scss'
import  MoreVertTwoTone  from '@mui/icons-material/MoreVert'
//Progreebar below
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const Featured = () => {
    
    const [tickets, setTickets] = useState([]);
    const [consoles, setConsole] = useState(true);
    /**
     * Tickets count
     */
     useEffect(() => {
         getTickets();
         setConsole(false)
          }, [tickets]);
          function getTickets() {
            setConsole(true)
              axios.get(`${appLocalizer.apiUrl}/wcs/v1/todays_tickets`,{  //const Todayticketcreated = statusval.length;
                headers:{
                  'content-type': 'application/json',
                  'X-WP-NONCE':appLocalizer.nonce
                }},).then(function(response) {
                setTickets(response.data);
                
          });
      }

    //   consoles == true ? <Spinner/> : ""

     
      /**
       * Calculations of tickets > status from the wp_wcs_tickets table
       */
        const statusval = [];
        tickets.forEach(TicketsBrekdown); //abstraction
        function TicketsBrekdown(insideticket, ticketrootkeys, arr) { //declaration
                const getTic = insideticket.status;
                statusval.push(getTic);    
        }
        const Todayticketcreated = statusval.length;
        let elementCnt ={};
        statusval.forEach(val => elementCnt[val] = (elementCnt[val] || 0) + 1);

        const TicketOpen = (elementCnt[0]);//0 shows how many time
        const TodaysTicketPending = (elementCnt[1]);
        const TodaysTicketResolve = (elementCnt[2]);
        const TodaysTicketClose = (elementCnt[3]);
        /**
         * Percentage calculations
         */
        const totalTickets = Todayticketcreated;
        function cal_percentage(TodaysTicketResolve, totalTickets) {
            return (100 * TodaysTicketResolve) / totalTickets;
         }  
        const percentageVal = cal_percentage(TodaysTicketResolve, totalTickets);
        const roundup = percentageVal.toFixed(0); // no floating point, 2 means 2 floating
        const percentage = +roundup || 0; //NaN removed + 

  return (
    <div className='wcs_featured'>
        <div className="wcs_top">
            <h1 className="wcs_title"> Today's Created Ticket Information </h1>
            <MoreVertTwoTone fontSize='small'/>
        </div>
        <div className="wcs_bottom">
            <div className="wcs_featuredChart">
            <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} />
            </div>
            <p className="wcs_title">Resolved</p>
            <p className="wcs_amount">{TodaysTicketResolve ? TodaysTicketResolve: "0"}</p>
            <p className="wcs_desc">All pending tickets need to solve urgently</p>
            <div className="wcs_summary">
                
                <div className="wcs_item">
                    <div className="itemTitle">New Open</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small'/>
                        <div className="resultAmount">{Todayticketcreated ?Todayticketcreated : "0"} Tickets</div>
                    </div>
                </div>
                <div className="wcs_item">
                    <div className="itemTitle">Close</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small'/>
                        <div className="resultAmount">{TodaysTicketClose ? TodaysTicketClose: "0"} Tickets</div>
                    </div>
                </div>
                <div className="wcs_item">
                    <div className="itemTitle">Pending</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <div className="resultAmount">{TodaysTicketPending ?TodaysTicketPending : "0"} Tickets</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured