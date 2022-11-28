import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Noimage from "../../../assets/img/no_img.png"
import React, {useState, useEffect} from "react"
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const EditTicket = ({ticketNum}) => {
  console.log( ticketNum)

   const id = ticketNum.row.id;
   const [file, setFile] = useState(ticketNum.row.file);
   const [image, setImage] = useState(ticketNum.row.image);
   const [username, setUsername] = useState(ticketNum.row.user_name);
   const [title, setTitle] = useState(ticketNum.row.title);
   const [email, setEmail] = useState(ticketNum.row.email);
   const [description, setDescription] = useState(ticketNum.row.description);


   /**
    * On submit
    */
    const handleSubmit = async e => {
      e.preventDefault();
      const url = `${appLocalizer.apiUrl}/wcs/v1/tickets_edit`;
      try{
        const res = await axios.post(url, {
        id, file,username,title,email,description
        }, {
          headers:{
            'content-type': 'application/json',
            'X-WP-NONCE':appLocalizer.nonce
          }
        }).then(function(res) {

            setFile("");
            setImage("");
            setUsername("");
            setTitle("");
            setEmail("");
            setDescription("");

            if(res.data === 1){
                
              Swal.fire({
              toast: true,
              position: 'bottom-right',
              icon: 'success',
              title: "Tickets updated successfully",
              showConfirmButton: false,
              timer: 1500
            })
          }
          else{
              Swal.fire({
              toast: true,
              position: 'bottom-right',
              icon: 'info',
              title: "Failed to update",
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
    <div className="wcs_add_ticket" id="wcs_add_ticket">
      <div className="wcs_tickets_container">
        {/* Start  */}
          <div className="wcs_top">
              <h1>Add New Ticket</h1>
          </div>
          <div className="wcs_bottom" id='wcs_bottom'>
              <div className="wcs_left">
                <div className="wcs_editor">
                <ReactQuill theme="snow" className="editor_filed" value={description} onChange={setDescription} />
                </div>
              </div>
              <div className="wcs_right">
                <form action="">
                  <div className="formInput wcs_inp_images">
                    <label htmlFor="file">Image: <DriveFolderUploadIcon className="wcs_icon"/></label>
              
                    <input type="file" id="file" name="file" style={{display:"none"}} onChange={(e) =>{setImage(e.target.files[0]); let c = e.target.files[0]; setFile(URL.createObjectURL(c)) }}/>
                    <div className="subimage">
                      <img src={image ? URL.createObjectURL(image)  : Noimage } value={image} alt="Add Customer" />
                    </div>
                  </div>
                  <div className="formInput">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="User name" name="username" value={username} onChange={e =>setUsername(e.target.value) }/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="title" name="title" value={title} onChange={e =>setTitle(e.target.value) }/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="jhon@gmail.com" name="email" value={email} onChange={e =>setEmail(e.target.value) }/>
                  </div>
                 
                  <button className="wcs_user_create" onClick={handleSubmit}>UPDATE</button>
                  
                </form>
              </div>
          </div>
        {/* End  */}
      </div>
    </div>
  )
}

export default EditTicket