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
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const TicketView = ({ticketNum}) => {
  // const [description, setDescription] = useState([]);
 

  // if(ticketNum.row.description.length>0){
  //   var myDesc = JSON.parse(ticketNum.row.description);
  // }
  // if(ticketNum.row.res_description.length>0){
  //   var myResdesc = JSON.parse(ticketNum.row.res_description);
  // }  

    /**
    * On submit on ticket view. not complete yet
    */

  const id = ticketNum.row.id;
  const [file, setFile] = useState(ticketNum.row.file);
  const [username, setUsername] = useState(ticketNum.row.user_name);
  const [title, setTitle] = useState(ticketNum.row.title);
  const [email, setEmail] = useState(ticketNum.row.email);
  const [description, setDescription] = useState(ticketNum.row.description);
  const [res_description, setResemail] = useState(ticketNum.row.res_description);

  // const [status, setStatus] = useState(ticketNum.row.status);
  // const [priority, setPriority] = useState(ticketNum.row.priority);
  // const [agent, setAgent] = useState(ticketNum.row.customer_id);
  // const [group, setGroup] = useState(ticketNum.row.groups);
  
 const handleSubmit = async e => {
    e.preventDefault();
    const url = `${appLocalizer.apiUrl}/wcs/v1/tickets_edit`;
    try{
      const res = await axios.post(url, {
        id, file,username,title,email,description,res_description
      }, {
        headers:{
          'content-type': 'application/json',
          'X-WP-NONCE':appLocalizer.nonce
        }
      }).then(function(res) {

          setDescription("");

          Swal.fire({
            toast: true,
            position: 'bottom-right',
            icon: 'success',
            title: 'Data Updated',
            showConfirmButton: false,
            timer: 1500
          })
      });
      
    } catch(err){
      console.log(err);
    }
  }
  
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
            {/* User desc */}
            <div className='wcs_tickets'>
                <div className="wcs_title_class">
                  {<BadgeIcon className="Icon_description_user"/>}
                      <div className="wcs_editor"><div className="desc"> 
                            <div className="wcs_descriptions" 
                                dangerouslySetInnerHTML={{__html: ticketNum.row.description}}>
                            </div>
                      </div>
                            
                    </div>      
                </div>
            </div>
            {/* Second desc */}

            {ticketNum.row.res_description && 
              <div className='wcs_tickets_res'>
                  <div className="wcs_title_res_class">
                  {<AdminPanelSettingsIcon className="Icon_description_user_res"/>}
                        <div className="wcs_editor_res">
                          <div className="desc_res">
                              <div className="wcs_descriptions_res" dangerouslySetInnerHTML={{__html: ticketNum.row.res_description}}></div>
                          </div>    
                      </div>      
                  </div>
              </div>
            }


            {/* User tickets  */}
              {/* { */}
                {/* myDesc &&
                myDesc.map(desc => {
                  return ( */}
                      {/* <div className='wcs_tickets'> */}
                        {/* <div className="wcs_title_class"> */}
                          {/* {<BadgeIcon className="Icon_description_user"/>} */}
                          {/* <div  className="user_title">{ticketNum.row.user_name[0]}</div> */}
                          {/* <div className="wcs_editor">
                            <div className="desc">
                            {
                              <div className="wcs_descriptions" dangerouslySetInnerHTML={{__html: desc}}></div>
                            }
                            </div>
                        </div>
                        </div>
                    </div> */}
                    {/* )
                })
              } */}


              {/*Tickets Response  */}
            {/*             
              {
                myResdesc&&
                myResdesc.map(desc => {
                  return (
                      <div className='wcs_tickets_res'>
                        <div className="wcs_title_res_class"> */}
                          {/* {<AdminPanelSettingsIcon className="Icon_description_user_res"/>} */}
                          {/* <div  className="user_title">{ticketNum.row.user_name[0]}</div> */}
                          {/* <div className="wcs_editor_res">
                            <div className="desc_res">
                            {
                              <div className="wcs_descriptions_res" dangerouslySetInnerHTML={{__html: desc}}></div>
                            }
                            </div>
                        </div>
                        </div>
                    </div> */}

                    
                    {/* )
              })
              } 
              */}


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
                    <button className="wcs_user_create" onClick={handleSubmit}>SEND</button>  
                  </div>
                </div>
            </div>
            
        </div>
        <div className="wcs_left">
            <div className="properties">
              <h2 className="properties_title">PROPERTIES</h2>
              <Tags {...{ticketNum}}/>
            </div>

            {/* <div className="wcs_right">
              <div className="wcs_editor"><ReactQuill theme="snow" className="editor_filed_note" /> </div>
            </div> */}

            <div className="wcs_right">
              
            {/* <form action="">
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
            </form> */}

        </div>
      </div>

    </div>
  )
}

export default TicketView