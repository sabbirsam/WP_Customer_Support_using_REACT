import "./ticketview.scss";
import Noimstatus from "../../../assets/img/no_img.png"
import ListAltIcon from '@mui/icons-material/ListAlt';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BadgeIcon from '@mui/icons-material/Badge';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import React, {useState,useEffect} from 'react';
import axios from "axios";
import Tags from "../../components/Tags/Tags";


const TicketView = ({ticketNum}) => {
  const [description, setDescription] = useState([]);
  const [resdescription, setResdescription] = useState([]);

  if(ticketNum.row.description.length>0){
    var myDesc = JSON.parse(ticketNum.row.description);
  }
  if(ticketNum.row.res_description.length>0){
    var myResdesc = JSON.parse(ticketNum.row.res_description);
  }


  
  // console.log({description})
  // console.log(ticketNum.row.id)


  
    /**
   * Ticket fetch
   */
    //  const [users, setUsers] = useState([]);
    //  useEffect(() => {
    //       getUsers();
    //   }, []);
    //   function getUsers() {
    //       axios.get('http://localhost/wppool/chatbox/wp-json/wcs/v1/tickets_res').then(function(response) {
    //         setUsers(response.data);
    //   });
    // } 
    // console.log(users)

  return (
    <div className="wcs_view_ticket" id="wcs_view_ticket">
      <div className="wcs_tickets_container">
          <div className='wcs_tickets'>
              <div className="wcs_title_class">
                {<ListAltIcon className="title_icon"/>}
                <span className="sp_title">{ticketNum.row.title}</span>
              </div>
          </div>
          <div className='wcs_tickets'>
              <div className="wcs_title_info">
                <div  className="user_title">{ticketNum.row.user_name[0]}</div>
                <span>{ticketNum.row.user_name}</span>
                <span  className="sp_title">{ticketNum.row.date_created}</span>
              </div>
          </div>
          <div className='wcs_tickets'>
              <div className="wcs_title_class">
                {<MarkEmailUnreadIcon className="title_icon_email"/>}
                <span className="sp_email">To: { ticketNum.row.email}</span>
              </div>
          </div>
          {/* User tickets  */}
            {
              myDesc &&
              myDesc.map(desc => {
                return (
                    <div className='wcs_tickets'>
                      <div className="wcs_title_class">
                        {<BadgeIcon className="Icon_description_user"/>}
                        {/* <div  className="user_title">{ticketNum.row.user_name[0]}</div> */}
                        <div className="wcs_editor">
                          <div className="desc">
                          {
                            <div className="wcs_descriptions" dangerouslySetInnerHTML={{__html: desc}}></div>
                          }
                          </div>
                      </div>
                      </div>
                  </div>
                  )
              })
            }
            {/*Tickets Response  */}
            {
              myResdesc&&
              myResdesc.map(desc => {
                return (
                    <div className='wcs_tickets_res'>
                      <div className="wcs_title_res_class">
                        {<AdminPanelSettingsIcon className="Icon_description_user_res"/>}
                        {/* <div  className="user_title">{ticketNum.row.user_name[0]}</div> */}
                        <div className="wcs_editor_res">
                          <div className="desc_res">
                          {
                            <div className="wcs_descriptions_res" dangerouslySetInnerHTML={{__html: desc}}></div>
                          }
                          </div>
                      </div>
                      </div>
                  </div>
                  )
              })
            }


          <div className='wcs_tickets'>
              <div className="wcs_title_class">
                {<BorderColorIcon className="Icon_description_user"/>}
                <div className="wcs_editor">
                <ReactQuill theme="snow" className="editor_filed" value={description} onChange={setDescription} />
                {/* <div dangerouslySetInnerHTML={{__html: ticketNum.row.description}}></div> */}
                </div>
              </div>
          </div>
          <div className='wcs_tickets'>
              <div className="wcs_title_class">
                <div className="wcs_editor">
                  <button className="wcs_user_create">SEND</button>  
                </div>
              </div>
          </div>
          
      </div>
      <div className="wcs_left">
          <div className="properties">
            <h2 className="properties_title">PROPERTIES</h2>
            <Tags {...{ticketNum}}/>
          </div>
          <div className="wcs_right">
            {/* left side not down editor  */}
            <div className="wcs_editor"><ReactQuill theme="snow" className="editor_filed_note" /> </div>
          </div>
          <div className="wcs_right">
          <form action="">
            <div className="formInput wcs_inp_imstatuss">
              <label htmlFor="file"><DriveFolderUploadIcon className="wcs_icon"/></label>
              <input type="file" id="file" name="file" style={{display:"none"}}/>
              <div className="subimstatus">
                <img src={Noimstatus} alt="Add Customer" />
              </div>
            </div>
            <div className="formInput">
              <input type="text" placeholder="Place note here..." name="title"/>
            </div>   
            <button className="wcs_user_create">SAVE</button>     
          </form>
      </div>
    </div>

  </div>
  )
}

export default TicketView