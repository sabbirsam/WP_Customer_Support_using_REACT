import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Noimage from "../../../assets/img/no_img.png"
import React, {useState} from "react"
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import "./addstaff.scss";

const AddStaff = () => {

  /**
   * Input
   */

   const [file,setFile] = useState()
   const [image, setImage] = useState("");
   const [username, setUsername] = useState("");
   const [fullname, setFullname] = useState("");
   const [email, setEmail] = useState("");
   const [mobile, setMobile] = useState("");
   const [password, setPassword] = useState("");
   const [address, setAddress] = useState("");
   const [country, setCountry] = useState("");
  
   /**
    * On submit
    */
   const handleSubmit = async e => {
     e.preventDefault()
 
     const url = `${appLocalizer.apiUrl}/wcs/v1/staff`;
     try{
       const res = await axios.post(url, {
        file,username,fullname,email,mobile, password, address,country
       }, {
         headers:{
           'content-type': 'application/json',
           'X-WP-NONCE':appLocalizer.nonce
         }
       }).then(function(res) {

        //  console.log(res);
          setFile()
          setImage("");
          setUsername("");
          setFullname("");
          setEmail("");
          setMobile("");
          setPassword("");
          setAddress("");
          setCountry("");

         Swal.fire({
           toast: true,
           position: 'bottom-right',
           icon: 'success',
           title: 'User has been saved',
           showConfirmButton: false,
           timer: 1500
         })
         
 
       });
       
     } catch(err){
       console.log(err);
     }
  }
  return (
    <div className="wcs_add_staff" id="wcs_add_staff">
      <div className="wcs_staff_container">
    
        {/* Start  */}
          <div className="wcs_top">
              <h1>Add New Staff</h1>
          </div>
          <div className="wcs_bottom">
              <div className="wcs_left">
                <img src={image ? URL.createObjectURL(image)  : Noimage } value={image} alt="Add Customer" />
              </div>
              <div className="wcs_right">
                <form action="">
                  <div className="formInput">
                    <label htmlFor="file">Image: <DriveFolderUploadIcon className="wcs_icon"/></label>
              
                    {/* <input type="file" id="file" name="file" style={{display:"none"}} onChange={(e) =>{setImage(e.target.files[0]), setFile(e.target.value) }}/> */}
                    <input type="file" id="file" name="file" style={{display:"none"}} onChange={(e) =>{setImage(e.target.files[0]); let c = e.target.files[0]; setFile(URL.createObjectURL(c)) }}/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Jondoe" value={username} name="username" onChange={e =>setUsername(e.target.value) }/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" placeholder="Jhon Doe" value={fullname} name="fullname" onChange={e =>setFullname(e.target.value) }/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="jhon@gmail.com" value={email} name="email" onChange={e =>setEmail(e.target.value) }/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="number" placeholder="+880 18546165" value={mobile} name="mobile" onChange={e =>setMobile(e.target.value) }/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="password" value={password} name="password" onChange={e =>setPassword(e.target.value) }/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="Dhaka Bangladesh"  value={address} name="address" onChange={e =>setAddress(e.target.value) }/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="country">Country</label>
                    <input type="text" placeholder="Bangladesh" value={country} name="country" onChange={e =>setCountry(e.target.value) }/>
                  </div>
                  <button className="wcs_user_create" onClick={handleSubmit}>SAVE</button>                
                </form>
              </div>
          </div>
        {/* End  */}
      </div>
    </div>
  )
}

export default AddStaff