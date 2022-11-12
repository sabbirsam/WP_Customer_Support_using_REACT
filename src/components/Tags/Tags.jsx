import React, {useState} from 'react';
import {Box, TextField, MenuItem} from '@mui/material';
import "./tag.scss"

const Tags = () => {
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    const [agent, setAgent] = useState('');
    const [group, setGroup] = useState('');
   

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
      

      const handleSubmit = () => {
        console.log(status)
        console.log(priority)
        console.log({agent})
        console.log({group})
      }

 

  return (

        <div className="status_widget">
            <Box width='250px' className='selectFields'>
                <TextField label="Status" select value={status} onChange={handleChange} fullWidth>
                    <MenuItem value="0">Close</MenuItem>
                    <MenuItem value="1">Open</MenuItem>
                    <MenuItem value="2">Pending</MenuItem>
                    <MenuItem value="3">Resolve</MenuItem>
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
                    <MenuItem value="0">Affiliates</MenuItem>
                    <MenuItem value="1">Facebook</MenuItem>
                    <MenuItem value="2">Support</MenuItem>
                    <MenuItem value="3">Marketing</MenuItem>
                </TextField>
              </Box>
             <div className="status_update"><button className='status_submit' onClick={handleSubmit}>Submit</button></div>             
        </div>
    )
}

export default Tags