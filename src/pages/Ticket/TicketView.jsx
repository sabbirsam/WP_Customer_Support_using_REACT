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
import DnsIcon from '@mui/icons-material/Dns';
import React, {useState,useEffect} from 'react';
import axios from "axios";
import Tags from "../../components/Tags/Tags";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const TicketView = ({ticketNum}) => {
    /**
    * On submit on ticket view. not complete yet
    */
  const [currentuser, setCurrentUserinfo] = useState([]);
  const id = ticketNum.row.id;
  const [description, setDescription] = useState(ticketNum.row.description);
  const [res_description, setResemail] = useState(ticketNum.row.res_description);

  useEffect(() => {
    getLogedInUsers();
  }, [currentuser]);
  function getLogedInUsers() {
      axios.get(`${appLocalizer.apiUrl}/wcs/v1/uid`,{
        headers:{
          'content-type': 'application/json',
          'X-WP-NONCE':appLocalizer.nonce
        }},).then(function(response) {
        setCurrentUserinfo(response.data);
    });
    }
    const capability = currentuser[4]


  
 const handleSubmit = async e => {
    e.preventDefault();
    const url = `${appLocalizer.apiUrl}/wcs/v1/tickets_response_update`;

    try{
      const res = await axios.post(url, {
        id,description,res_description
      }, {
        headers:{
          'content-type': 'application/json',
          'X-WP-NONCE':appLocalizer.nonce
        }
      }).then(function(res) {
          setDescription("");
          if(res.data === 1){  
            Swal.fire({
            toast: true,
            position: 'bottom-right',
            icon: 'success',
            title: "Added.....",
            showConfirmButton: false,
            timer: 1500
          })
        }
        else{
            Swal.fire({
            toast: true,
            position: 'bottom-right',
            icon: 'info',
            title: "Failed to add",
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
      <div className="wcs_ticket_view">
        <div className='wcs_ticket_container'>
            {/* Start  */}
            
                  <div className='wcs_tickets'>
                      <div className="wcs_title_class">
                        {<ListAltIcon className="title_icon"/>}
                        <span className="sp_title">{ticketNum.row.title}</span>
                      </div>
                  </div>
                  <div className='wcs_tickets'>
                      <div className="wcs_title_info">
                        {<DnsIcon className="wcs_user_title_info"/>}
                        {/* <div  className="user_title">{ticketNum.row.user_name[0]}</div> */}
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

                  <div className='wcs_issues_container'>
                  {/* User desc  */}
                  <div className='wcs_tickets'>
                      <div className="wcs_title_class">
                        {<BadgeIcon className="Icon_description_user"/>}
                            <div className="wcs_description"><div className="desc"> 
                                  <div className="wcs_descriptions" 
                                      dangerouslySetInnerHTML={{__html: ticketNum.row.description}}>
                                  </div>
                            </div>
                                  
                          </div>      
                      </div>
                  </div>
                  {/* Second desc  staff*/}

                  {ticketNum.row.res_description && 
                    <div className='wcs_tickets'>
                        <div className="wcs_title_class">
                        {<AdminPanelSettingsIcon className="Icon_description_user"/>}
                              <div className="wcs_description">
                                <div className="desc">
                                    <div className="wcs_descriptions" dangerouslySetInnerHTML={{__html: ticketNum.row.res_description}}></div>
                                </div>    
                            </div>      
                        </div>
                    </div>
                  }
                  </div>
        
              {/* END  */}

              {/* editor  */}
              <div className='wcs_tickets'>
                  <div className="wcs_title_class">
                    {<BorderColorIcon className="Icon_description_user"/>}
                    <div className="wcs_editor">
                    {capability =='administrator' || capability =='editor' ? 
                    <ReactQuill theme="snow" className="editor_filed" value={res_description} onChange={setResemail} />
                    : 
                    <ReactQuill theme="snow" className="editor_filed" value={description} onChange={setDescription}/>
                    }
                    </div>
                  </div>
              </div>
              <div className='wcs_tickets'>
                  <div className="wcs_title_class">
                    <div className="wcs_editor_button">
                      <button className="wcs_ticket_submit" onClick={handleSubmit}>SEND</button>  
                    </div>
                  </div>
              </div>

              {/* END  */}
          </div>
          {capability =='administrator' || capability =='editor' ? 
          <>
            <div className='wcs_ticket_widgets'>    
              <div className="properties">
                <h2 className="properties_title">PROPERTIES</h2>
                <Tags {...{ticketNum}}/>
              </div>  
            </div>
          </>: ""}
      </div>


  )
}

export default TicketView