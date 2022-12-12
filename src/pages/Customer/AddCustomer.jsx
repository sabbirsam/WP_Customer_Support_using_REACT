import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Noimage from "../../../assets/img/no_img.png"
import React, {useState ,useEffect} from "react"
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import "./addcustomer.scss";

const AddCustomer = () => {
  /**
   * Images
   */
  const [file, setFile] = useState();
  const [passview, setPassview] = useState(false);
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
    cpassword : "",
    address : "",
    country : "",
  }); 
  const [saveloader, setsaveLoader] = useState("SAVE")
  const [evalidation, setEValidation] = useState(true);
  const [bgColor, setBgcolor] = useState("#cccccc");
  const [color, setColor] = useState("#666666");


  useEffect(() => {
    if (cinputs.username.length <= 2 || cinputs.email.length <= 3 || cinputs.password.length <= 7 || cinputs.cpassword.length <= 7 ) {
      setEValidation(true)
      setBgcolor("#cccccc")
      setColor("#666666")
    }
    else {
      setEValidation(false)
      setBgcolor("teal")
      setColor("white")
    }
  }, [cinputs.username, cinputs.email,cinputs.password,cinputs.cpassword, evalidation]);

  const handleChange = e =>{
    setCInputs(prev=>({...prev, [e.target.name] : e.target.value})) 
  }
  // console.log(cinputs);
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
          cpassword : "",
          address : "",
          country : "",
        });
        setEValidation(true)
        setBgcolor("#cccccc")
        setColor("#666666")


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
  // useEffect(() => {
  //   handleView();
  // }, [passview]);
  const handleView = () =>{
    passview === true ? setPassview(false): setPassview(true)
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
                    <label htmlFor="username">Username*</label>
                    <input type="text" placeholder="Jondoe" value={cinputs.username} name="username" required pattern={"^[A-Za-z0-9]{3,10}$"} onChange={handleChange}/>
                    <span>Username should be 3 to 10 character and shouldn't include any special character</span> 
                  </div>
                  <div className="formInput">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" placeholder="Jhon Doe" value={cinputs.fullname} name="fullname" onChange={handleChange}/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="email">Email*</label>
                    <input type="email" placeholder="jhon@gmail.com" value={cinputs.email} name="email" required onChange={handleChange}/>
                    <span>Should be a valid email address</span> 
                  </div>
                  <div className="formInput">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="number" placeholder="+880 18546165" value={cinputs.mobile} name="mobile" onChange={handleChange}/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="password">Password*</label>
                    <div className="wcsPass">   
                      <div className="passimg" onClick={handleView}>
                          {passview === false ? <VisibilityOffIcon className='passVisibility'/> : <VisibilityIcon className='passVisibility'/>}
                      </div> 
                      <input type={passview === true ? "text" : "password"} placeholder="password" value={cinputs.password} name="password" required pattern={"^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$"} onChange={handleChange}/>
                    </div>
                    <span>Password should be minimum eight characters, at least one uppercase letter and one digit</span> 
                  </div>
                  <div className="formInput">
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="Dhaka Bangladesh" value={cinputs.address} name="address" onChange={handleChange}/>
                  </div>
                  <div className="formInput">
                    <label htmlFor="cpassword">Confirm Password*</label>
                    <input type={passview === true ? "text" : "password"} placeholder="confirm password" value={cinputs.cpassword} name="cpassword" required pattern={cinputs.password} onChange={handleChange}/>
                    <span>Password need to be matched!!</span> 
                  </div>

                  <div className="formInput">
                    <label htmlFor="country">Country</label>
                    <input type="text" placeholder="Bangladesh" value={cinputs.country} name="country" onChange={handleChange}/>
                  </div>
                  <button style={{background:bgColor,color:color}} className="wcs_user_create" disabled={evalidation} onClick={handleSubmit}>{saveloader}</button>                  
                </form>
              </div>
          </div>
        {/* End  */}
      </div>
    </div>
  )
}

export default AddCustomer