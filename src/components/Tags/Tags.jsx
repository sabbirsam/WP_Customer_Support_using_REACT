import React, {useState,useEffect} from 'react';
import {Box, TextField, MenuItem} from '@mui/material';
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import "./tag.scss"

const Tags = ({ticketNum}) => {
  const id = ticketNum.row.id;
    const [status, setStatus] = useState(ticketNum.row.status);
    const [priority, setPriority] = useState(ticketNum.row.priority);
    const [agent, setAgent] = useState(ticketNum.row.staff_id);
    const [group, setGroup] = useState(ticketNum.row.groups);
   
      const handleChange = (event) => {
        setStatus(event.target.value);
      };
      const handlePriority = (event) => {
        setPriority(event.target.value);
      };
      const handleAgent = (event) => {
        setAgent(event.target.value);
      };
      const handleGroup = (event) => {
        setGroup(event.target.value);
      };
      const handleSubmit = async e => {
        const url = `${appLocalizer.apiUrl}/wcs/v1/tickets_status`;
          try{
            const res = await axios.post(url, {
              id,status,priority,agent,group
            }, {
              headers:{
                'content-type': 'application/json',
                'X-WP-NONCE':appLocalizer.nonce
              }
            }).then(function(res) {
              if(res.data === 1){
                
                  Swal.fire({
                  toast: true,
                  position: 'bottom-right',
                  icon: 'success',
                  title: "Status updated successfully",
                  showConfirmButton: false,
                  timer: 1500
                })
              }
              else{
                  Swal.fire({
                  toast: true,
                  position: 'bottom-right',
                  icon: 'info',
                  title: "Failed to change status",
                  showConfirmButton: false,
                  timer: 1500
                  })
              }
            });
            
          } catch(err){
            console.log(err);
          } 
      }

 

  return (

        <div className="status_widget">
            <Box width='250px' className='selectFields'>
                <TextField label="Status" select value={status} onChange={handleChange} fullWidth>
                    <MenuItem value="0">Open</MenuItem>
                    <MenuItem value="1">Pending</MenuItem>
                    <MenuItem value="2">Resolve</MenuItem>
                    <MenuItem value="3">Close</MenuItem>
                </TextField>
              </Box>
            <Box width='250px' className='selectFields'>
                <TextField label="Priority" select value={priority} onChange={handlePriority} fullWidth>
                    <MenuItem value="0">Low</MenuItem>
                    <MenuItem value="1">Medium</MenuItem>
                    <MenuItem value="2">High</MenuItem>
                    <MenuItem value="3">Urgent</MenuItem>
                </TextField>
              </Box>
            <Box width='250px' className='selectFields'>
                <TextField label="Agent" select value={agent} onChange={handleAgent} fullWidth>
                    <MenuItem value="0">SABBIR SAM</MenuItem>
                    <MenuItem value="1">TOUKIR</MenuItem>
                    <MenuItem value="2">ADNANA</MenuItem>
                    <MenuItem value="3">ZAKIR</MenuItem>
                </TextField>
              </Box>
            <Box width='250px' className='selectFields'>
                <TextField label="group" select value={group} onChange={handleGroup} fullWidth>
                    <MenuItem value="0">Support</MenuItem>
                    <MenuItem value="1">Affiliates</MenuItem>
                    <MenuItem value="2">Facebook</MenuItem>
                    <MenuItem value="3">Marketing</MenuItem>
                </TextField>
              </Box>
             <div className="status_update"><button className='status_submit' onClick={handleSubmit}>Submit</button></div>             
        </div>
    )
}

export default Tags