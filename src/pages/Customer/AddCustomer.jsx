import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Noimage from "../../../assets/img/no_img.png"
import React, {useState} from "react"
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import "./addcustomer.scss";

const AddCustomer = () => {
  
  /**
   * Images
   */
  const [file, setFile] = useState();
  /**
   * Set all input 
   */
  const [cinputs, setCInputs] = useState({
    file : "",
    username: "",
    fullname : "",
    email : "",
    mobile : "",
    password : "",
    address : "",
    country : "",
  }); 
  const [saveloader, setsaveLoader] = useState("SAVE")
  const handleChange = e =>{
    setCInputs(prev=>({...prev, [e.target.name] : e.target.value})) 
  }
  console.log(cinputs);
  /**
   * On submit
   */
  const handleSubmit = async e => {
    e.preventDefault()

    setsaveLoader("Saving....")

    const url = `${appLocalizer.apiUrl}/wcs/v1/users`;
    try{
      const res = await axios.post(url, cinputs, {
        headers:{
          'content-type': 'application/json',
          'X-WP-NONCE':appLocalizer.nonce
        }
      }).then(function(res) {
        console.log(res.data)
        setsaveLoader("SAVE")
        setFile("");
        setCInputs({
          file : "",
          username: "",
          fullname : "",
          email : "",
          mobile : "",
          password : "",
          address : "",
          country : "",
        });

      if(res.data === 0){

          Swal.fire({
          toast: true,
          position: 'bottom-right',
          icon: 'error',
          title: "Failed to inserted data! Unauthorize access",
          showConfirmButton: false,
          timer: 1500
        })

        }else if(res.data === 1){
          
            Swal.fire({
            toast: true,
            position: 'bottom-right',
            icon: 'success',
            title: "Customer created successfully",
            showConfirmButton: false,
            timer: 1500
          })

      }else{
          Swal.fire({
          toast: true,
          position: 'bottom-right',
          icon: 'info',
          title: "Failed to create as email exist",
          showConfirmButton: false,
          timer: 1500
          })

        }

      });// .then can add here
      
    } catch(err){
      console.log(err);
    }

  }

  return (
    <div className="wcs_add_customer" id="wcs_add_customer">
      <div className="wcs_tickets_container">
        {/* Start  */}
          <div className="wcs_top">
              <h1>Add New User</h1>
          </div>
          <div className="wcs_bottom">
              <div className="wcs_left">
                <img src={file ? URL.createObjectURL(file)  : Noimage } value={file} alt="Add Customer" />
              </div>
              <div className="wcs_right">
                <form action="">
                  <div className="formInput">
                    <label htmlFor="file">Image: <DriveFolderUploadIcon className="wcs_icon"/></label>
              
                    <input type="file" id="file" name="file" style={{display:"none"}} onChange={(e) => { handleChange(e); setFile(e.target.files[0]) }}/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Jondoe" value={cinputs.username} name="username" onChange={handleChange}/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" placeholder="Jhon Doe" value={cinputs.fullname} name="fullname" onChange={handleChange}/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="jhon@gmail.com" value={cinputs.email} name="email" onChange={handleChange}/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="number" placeholder="+880 18546165" value={cinputs.mobile} name="mobile" onChange={handleChange}/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="password" value={cinputs.password} name="password" onChange={handleChange}/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="Dhaka Bangladesh" value={cinputs.address} name="address" onChange={handleChange}/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="country">Country</label>
                    <input type="text" placeholder="Bangladesh" value={cinputs.country} name="country" onChange={handleChange}/>
                  </div>
                  <button className="wcs_user_create" onClick={handleSubmit}>{saveloader}</button>                  
                </form>
              </div>
          </div>
        {/* End  */}
      </div>
    </div>
  )
}

export default AddCustomer