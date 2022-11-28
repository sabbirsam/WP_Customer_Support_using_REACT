import React, {useState, createContext, useContext} from "react"
import {TicketviewContext} from "../../contexts/TicketviewContext"
import {TicketeditContext} from "../../contexts/TicketeditContext"
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import './data-table-ticket.scss'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

const TicketActions = ({params}) => {
  // console.log(params)
  
  /**
   * Action mode
   */
    const [action, setAction] = useState(null);
    const {view, setView } = useContext(TicketviewContext);
    const {edit, setEdit} = useContext(TicketeditContext);

    const handleAction = (e) =>{
      setAction(e);
    }
    const handleView = (e) =>{
      setView(e);
    }    
    const handleEdit=(e)=>{ 
      setEdit(e);
    }
    const handleReset=(e)=>{
      setAction(null);
    }
    /**
     * 
     * @param {Delete functionality} e 
     */
    const handleDelete = (e) => {
        var id = { "id": e }; 
        const url = `${appLocalizer.apiUrl}/wcs/v1/tickets_delete`;
        Swal.fire({
              title: 'Are you sure to?',
              text: "You won't be able to revert this ticket!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) =>  {
          if (result.isConfirmed) {
              try{
                const res = axios.post(url, id, {
                  headers:{
                    'content-type': 'application/json',
                    'X-WP-NONCE':appLocalizer.nonce
                    }
                  }).then(function(res) {
            
                      Swal.fire({
                        // position: 'top-end',
                        toast: true,
                        position: 'bottom-right',
                        icon: 'success',
                        title: 'Ticket has been deleted',
                        showConfirmButton: false,
                        timer: 1500
                      })

                    });// .then can add here
                  
                  } catch(err){
                    console.log(err);
                } //end
        
            }

		    });

   
    }   
  return (
      <>
        {action === null &&<div className="wcs_cellAction">
            <div className="wcs_viewButton" data-id={`${params.row.id}`} onClick={(e) => { handleView(params) }} >VIEW</div>
            <div className="wcs_viewButton" data-id={`${params.row.id}`} onClick={(e) => { handleAction(params.row.id) }} >ACTION</div>
        </div>}
        {action &&<div className="wcs_cellAction">
            <div className="wcs_deleteButton" data-id={`${params.row.id}`} onClick={(e) => { handleReset(params.row.id) }}>{<ReplyAllIcon className="action_reset"/>}</div>
            <div className="wcs_deleteButton" data-id={`${params.row.id}`} onClick={(e) => { handleEdit(params) }}>EDIT</div>
            <div className="wcs_deleteButton" data-id={`${params.row.id}`} onClick={(e) => { handleDelete(params.row.id) }}>DELETE</div> 
        </div>}

      </>
        
  )
}

export default TicketActions