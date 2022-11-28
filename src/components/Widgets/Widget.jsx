// import React from 'react'
import './widgets.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Person3Icon from '@mui/icons-material/Person3';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import React, { useState, useEffect } from 'react';
import axios from "axios";


const Widget = ( {type} ) => {
    /**
     * Calculations
     */
    const [user, setUser] = useState([]);
    const [staff, setStaff] = useState([]);
    const [tickets, setTickets] = useState([]);
    

    /**
     * User count
     */
     useEffect(() => {
         getUsers();
     }, [user]);
        function getUsers() {
            axios.get(`${appLocalizer.apiUrl}/wcs/v1/users`,{
                headers:{
                  'content-type': 'application/json',
                  'X-WP-NONCE':appLocalizer.nonce
                }},).then(function(response) {
            setUser(response.data);
        });
    }
    /**
     * Staff count
     */
        useEffect(() => {
        getStaff();
          }, [staff]);
          function getStaff() {
              axios.get(`${appLocalizer.apiUrl}/wcs/v1/staff`,{
                headers:{
                  'content-type': 'application/json',
                  'X-WP-NONCE':appLocalizer.nonce
                }},).then(function(response) {
              setStaff(response.data);
          });
      }
    /**
     * Tickets count
     */
        useEffect(() => {
        getTickets();
          }, [tickets]);
          function getTickets() {
              axios.get(`${appLocalizer.apiUrl}/wcs/v1/tickets`,{
                headers:{
                  'content-type': 'application/json',
                  'X-WP-NONCE':appLocalizer.nonce
                }},).then(function(response) {
                setTickets(response.data);
          });
      }

     
      tickets.forEach(TicketsBrekdown); //abstraction
    //   var getTic;
      function TicketsBrekdown(insideticket, ticketrootkeys, arr) { //declaration
         const getTic = insideticket.status;
         console.log(getTic);
      }
      

        // let target = 3;
        // let counter = 0;
        // for (x of getTic) {
        //     if (x == target) {
        //             counter++;
        //     }
        // };
        // console.log(counter);

        


 
    /**
     * Switch 
     */
    let data;
    const percentage = 20;
    switch(type){
        case "total_staffs":
            data ={
                title: "Total Staff",
                // total: '3',
                total: staff.length,
                isPercantage:false,
                link: "See all staff info",
                icon:(
                    <SupportAgentIcon className='wcs_staff_icon' style={{color:"black"}}/>
                )
            };
            break;
        case "total_users":
            data ={
                title: "Total Users",
                // total: "1500",
                total: user.length,
                isPercantage:false,
                link: "See all users",
                icon:(
                    <Person3Icon className='wcs_users_icon' style={{color:"black"}}/>
                )
            };
            break;
        case "total_ticket_close":
            data ={
                title: "Total Tickets",
                total: tickets.length,
                isPercantage:true,
                link: "Visit ticket panel",
                icon:(
                    <BookmarkAddedIcon className='wcs_resolve_icon' style={{color:"#31522a"}}/>
                )
            };
            break;
        case "todays_new_ticket":
            data ={
                title: "Total Resolved",
                total: '10',
                isPercantage:true,
                link: "Check all",
                icon:(
                    <ConfirmationNumberIcon className='wcs_icon' style={{color:"#464587"}}/>
                )
            };
            break;
        case "ongoing":
            data ={
                title: "Ongoing",
                total: "50",
                isPercantage:true,
                link: "See all tickets",
                icon:(
                    <StickyNote2Icon className='wcs_icon' />
                )
            };
            break;
        case "pending":
            data ={
                title: "Pending message",
                total: "45",
                isPercantage:true,
                link: "See all message",
                icon:(
                    <PendingActionsIcon className='wcs_pending_icon' style={{color:"crimson"}}/>
                )
            };
            break;
        case "chatting":
            data ={
                title: "Conversation rate",
                total: "100%",
                isPercantage:true,
                link: "Check chat list",
                icon:(
                    <FactCheckIcon className='wcs_resolve_icon' />
                )
            };
            break;                   
        default:
            break;
    }
  return (
    <div className='wcs_widget'>
        <div className="wcs_left">
            <span className="wcs_title">{data.title}</span>
            <span className="wcs_counter">{data.total}</span>
            <span className="wcs_link">{data.link}</span>
        </div>
        <div className="wcs_right">

            {data.isPercantage &&
            <div className="wcs_percentage wcs_positive">
                <KeyboardArrowUpIcon/>
              {percentage}{data.isPercantage && "%"}
            </div>
            }
            <div className="wcs_percentage wcs_positive"></div> 

           {data.icon}
        </div>
    </div>
  )
}

export default Widget