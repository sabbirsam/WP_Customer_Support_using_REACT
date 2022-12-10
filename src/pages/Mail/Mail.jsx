import React, {useState, useEffect} from "react"
import axios from "axios";
import Switch from '@mui/material/Switch';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import "./mail.scss";

const Mail = () => {
  // console.log("Hello")
  /**
   * Get Configuration
   */
  const [configuration, setConfiguration] = useState([]);
    /**
     * set values
     */
    const [mailactive, setMail] = useState(configuration.mailactive);
    const [username, setUsername] = useState(configuration.username);
    const [password, setPassword] = useState(configuration.password);
    const [host, setHost] = useState(configuration.host);
    /**
     * Send mail
     */
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
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
   * set values
   * @param {Mail active or deactive:: true/fasle} event 
   */
  const label = { inputProps: { 'aria-label': 'Size switch mailactive' } };
  const handleSave = async e => {
    e.preventDefault();
    const url = `${appLocalizer.apiUrl}/wcs/v1/wcs_mail_infosave`;
      try{
        const res = await axios.post(url, {
          mailactive,username,password,host
        }, {
          headers:{
            'content-type': 'application/json',
            'X-WP-NONCE':appLocalizer.nonce
          }
        }).then(function(res) {
          setUsername("");
          setPassword("");
          setHost("");
        if(res.data === 1){
          Swal.fire({
            toast: true,
            position: 'bottom-right',
            icon: 'success',
            title: 'Mail configuration completed',
            showConfirmButton: false,
            timer: 1500
          })
        }else{
          Swal.fire({
            toast: true,
            position: 'bottom-right',
            icon: 'info',
            title: "Mail configuration failed",
            showConfirmButton: false,
            timer: 1500
            })
        }
        });
      } catch(err){
        console.log(err);
      }
  }

  /**
   * Test mail send
   */
  const handleSubmit = async e => {
    e.preventDefault();
    const config = {
      Host : configuration.host,
      Username : configuration.username,
      Password : configuration.password,
      From : configuration.ownermail,
      To : email,
      Subject : title,
      Body : message
    }
    
    // if(window.Email){
    if(configuration.password && window.Email){
      window.Email.send(config).then((result) => {
        // message => alert(message)
        setEmail("");
        setTitle("");
        setMessage("");

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
          position: 'bottom-right',
          icon: 'info',
          title: "Mail send failed",
          showConfirmButton: false,
          timer: 1500
          })
      });
    }else{
      Swal.fire({
        toast: true,
        position: 'bottom-right',
        icon: 'info',
        title: "Mail send failed",
        showConfirmButton: false,
        timer: 1500
        })
    }
  }

  return (
  //username: msa.sabbir.ahmed.official@gmail.com  //password: 65F4168DE97772081C391EE13B4CE44B9A90 //server: smtp.elasticemail.com //post:2525 
    
    <div className="wcs_add_mail" id="wcs_add_mail">
      <div className="wcs_mails_container">
        {/* Start  */}
          <div className="wcs_top">
              <h1 className="setting_panel">GMAIL Setting -<a target="_blank" href="https://smtpjs.com/">SMTPJS.COM</a></h1>
              <h1 className="tesing_panel">Testing panel</h1>
          </div>
          <div className="wcs_bottom" id='wcs_bottom'>
              <div className="wcs_left">
              <form action="">
                      <div className="formInput">
                        <label htmlFor="mailactive">Activate Mail: {<Switch className="mailactive"  checked={mailactive || false} onChange={e =>setMail(e.target.checked) } color="secondary" {...label} />} </label>
                      </div>
                      <div className="formInput">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="username" name="username" value={username} onChange={e =>setUsername(e.target.value) }/>
                      </div>
                      <div className="formInput">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="password" name="password" value={password} onChange={e =>setPassword(e.target.value) }/>
                      </div>
                      <div className="formInput">
                        <label htmlFor="host">Host</label>
                        <input type="text" placeholder="smtp.yourserver.com" name="host" value={host} onChange={e =>setHost(e.target.value) }/>
                      </div>
                      <button className="wcs_test_mail_send" onClick={handleSave}>SAVE</button>
                  </form>
              </div>
              <div className="wcs_right">
                  <form action="">
                      <div className="formInput">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="sender mail" name="email" value={email} onChange={e =>setEmail(e.target.value) }/>
                      </div>
                      <div className="formInput">
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="Add mail title" name="title" value={title} onChange={e =>setTitle(e.target.value) }/>
                      </div>

                      <div className="formInput">
                        <label htmlFor="username">Message</label>
                        <textarea type="text" placeholder="Hi....." name="username" value={message} onChange={e =>setMessage(e.target.value) }/>
                      </div>

                      <button className="wcs_test_mail_send" onClick={handleSubmit}>SEND</button>
                  </form>
              </div>
          </div>
        {/* End  */}
      </div>
    </div>
  )
}

export default Mail