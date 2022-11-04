import "./addcustomer.scss";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Noimage from "../../../assets/img/no_img.png"
import {useState} from "react"

const AddCustomer = () => {
  const [file, setFile] = useState();

  // const [name, setName] = useState();
  // const [gmail, setGmail] = useState("jhon@gmail.com");
  // const [number, setNum] = useState("+880 18546165");

  return (
    <div className="wcs_add_customer" id="wcs_add_customer">
      <div className="wcs_tickets_container">
        {/* Start  */}
          <div className="wcs_top">
              <h1>Add New User</h1>
          </div>
          <div className="wcs_bottom">
              <div className="wcs_left">
                <img src={file ? URL.createObjectURL(file)  : Noimage } alt="Add Customer" />
                {/* <div className="formInput">
                    <h2 className="title_name">{name ? name : "Jhon Doe"}</h2>
                    <h3 className="title_email">jhon@gmail.com</h3>
                    <h3 className="title_num">+880 18546165</h3>
                </div> */}
              </div>
              <div className="wcs_right">
                <form action="">
                  <div className="formInput">
                    <label htmlFor="file">Image: <DriveFolderUploadIcon className="wcs_icon"/></label>
                    <input type="file" id="file" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}  />
                  </div>
                  <div className="formInput">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Jondoe" name="username" />
                  </div>
                  <div className="formInput">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" placeholder="Jhon Doe" name="fullname" />
                  </div>
                  <div className="formInput">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="jhon@gmail.com" name="email" />
                  </div>
                  <div className="formInput">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="number" placeholder="+880 18546165" name="mobile" />
                  </div>
                  <div className="formInput">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="password" name="password" />
                  </div>
                  <div className="formInput">
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="Dhaka Bangladesh" name="address" />
                  </div>
                  <div className="formInput">
                    <label htmlFor="country">Country</label>
                    <input type="text" placeholder="Bangladesh" name="country" />
                  </div>
                  <button className="wcs_user_create">Save</button>
                </form>
              </div>
          </div>
        {/* End  */}
      </div>
    </div>
  )
}

export default AddCustomer