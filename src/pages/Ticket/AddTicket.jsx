import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Noimage from "../../../assets/img/no_img.png"
import React, {useState,useEffect} from "react"
import axios from "axios";
import ReactQuill from 'react-quill';
import Mail from '../Mail/Mail'
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import "./addticket.scss";

const AddTicket = () => {
  const [currentuser, setCurrentUserinfo] = useState([]);
  /**
   * Mail
   */
  const [configuration, setConfiguration] = useState([]);
  /**
   * Validation and button design
   */
   const [evalidation, setEValidation] = useState(true);
   const [bgColor, setBgcolor] = useState("#cccccc");
   const [color, setColor] = useState("#666666");
  /**
   * Get
   */
   const [file, setFile] = useState();
   const [image, setImage] = useState("");
   const [username, setUsername] = useState("");
   const [title, setTitle] = useState("");
   const [email, setEmail] = useState("");
  //  const [description, setDescription] = useState([]);
   const [description, setDescription] = useState("");
  //  const [resdescription, setResdescription] = useState([]);

  /**
   * Get current capability
   */
  useEffect(()=>{
    const getTabstatus = async () =>{
            const res = await axios.get(`${appLocalizer.apiUrl}/wcs/v1/uid`,{
                headers:{
                'content-type': 'application/json',
                'X-WP-NONCE':appLocalizer.nonce
                }},).then(function(response) {
                   setCurrentUserinfo(response.data);
            });
        }; 
       getTabstatus()   
  },[]); //it run 2 times
  const capability = currentuser[4]
  const subsusername = currentuser[1]
  const subsusermail = currentuser[3]
  // console.log(currentuser)

  /**
   * Validation
   */
   useEffect(() => {
    if (username.length <= 2 || email.length <= 3) {
      setEValidation(true)
      setBgcolor("#cccccc")
      setColor("#666666")
    }
    else {
      setEValidation(false)
      setBgcolor("teal")
      setColor("white")
    }
  }, [username, email,evalidation]);

  /**
   * Get Configuration 
   */
  useEffect(() => {
    getLogedInUsers();
  }, []);
    function getLogedInUsers() {
        axios.get(`${appLocalizer.apiUrl}/wcs/v1/wcs_mail_active`,{
          headers:{
            'content-type': 'application/json',
            'X-WP-NONCE':appLocalizer.nonce
          }},).then(function(response) {
            setConfiguration(response.data);
      });
    }

   /**
    * On submit
    */
    const handleSubmit = async e => {
      e.preventDefault();
      /**
       * Mail
       */
   
      const url = `${appLocalizer.apiUrl}/wcs/v1/add_tickets`;
      try{
        const res = await axios.post(url, {
         file,username,title,email,description
        }, {
          headers:{
            'content-type': 'application/json',
            'X-WP-NONCE':appLocalizer.nonce
          }
        }).then(function(res) {
          /**
           * Mail
           */
          const config = {
            Host : configuration.host,
            Username : configuration.username,
            Password : configuration.password,
            From : configuration.ownermail,
            To : email,
            Subject : title,
            Body : description
          }
          window.Email.send(config).then((result) => {    
            Swal.fire({
              toast: true,
              position: 'bottom-right',
              icon: 'success',
              title: 'Mail Send......',
              showConfirmButton: false,
              timer: 1900
            })
          }).catch((err) => {
            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'error',
              title: "Mail send failed",
              showConfirmButton: false,
              timer: 1500
              })
          });
          /**
           * Reset ticket panel
           */
            setFile("");
            setImage("");
            setUsername("");
            setTitle("");
            setEmail("");
            setDescription("");
            setEValidation(true)
            setBgcolor("#cccccc")
            setColor("#666666")
          /**
           * Ticekt confirmation
           */
          Swal.fire({
            toast: true,
            position: 'bottom-right',
            icon: 'success',
            title: 'Ticket has been created',
            showConfirmButton: false,
            timer: 1500
          })
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
                <ReactQuill theme="snow" className="editor_filed" name="description" value={description} onChange={setDescription} 
                // modules={{ toolbar: [['align','strike','clean','code-block','bold', 'italic','underline'], ['link', 'image','color']] }}
                />

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
              
                  {  capability =='subscriber' ?<>
                  <div className="formInput">
                    <label htmlFor="username">Username*</label>
                    <input type="text" placeholder="User name" name="username" disabled value={subsusername}/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="email">Email*</label>
                    <input type="email" placeholder="jhon@gmail.com" name="email"  disabled value={subsusermail}/>
                  </div>
                      </>
                   :
                      <>
                      <div className="formInput">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="User name" name="username" value={username} onChange={e =>setUsername(e.target.value) }/>
                      </div>
                    
                    <div className="formInput">
                      <label htmlFor="email">Email</label>
                      <input type="email" placeholder="jhon@gmail.com" name="email" value={email} onChange={e =>setEmail(e.target.value) }/>
                    </div>
                     </>
                   }
                    <div className="formInput">
                      <label htmlFor="title">Title</label>
                      <input type="text" placeholder="title" name="title" value={title} onChange={e =>setTitle(e.target.value) }/>
                    </div>

                  {  capability =='subscriber' ?
                   <button style={{background:"teal",color:"white"}} className="wcs_user_create" onClick={handleSubmit}>ADD</button>
                  :
                  <button style={{background:bgColor,color:color}} className="wcs_user_create" disabled={evalidation} onClick={handleSubmit}>ADD</button>
                  }
                </form>
              </div>
          </div>
        {/* End  */}
      </div>
    </div>
  )
}

export default AddTicket