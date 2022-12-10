import React, {useState, useEffect, useMemo } from "react"
import axios from "axios";
import './documentation.scss'

const Documentation = () => {
    const [configuration, setConfiguration] = useState([]);
   
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

    console.log(configuration);

    const toggleState = useMemo(() => configuration.ownermail, [configuration])

  return (
    <>
    <div>Second run 0:- {toggleState}</div>
    <div>Second run 1:- {toggleState ? toggleState : "Loading.."}</div>  
    <div>Second run 2:- {toggleState && toggleState}</div>
    
    {/* Best one 
     <div>Second run 1:- {toggleState ? toggleState : "Loading.."}</div>  
    */}
    </>
  )

}

export default Documentation