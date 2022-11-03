// import React, { useState, useEffect }  from 'react';
// import React  from 'react';
// import axios from 'axios';
import Customer from './pages/Customer/Customer';
import Dashboard from './pages/Dashboard/Dashboard';
import Department from './pages/Department/Department';
import Product from './pages/Product/Product';
import Staff from './pages/Staff/Staff';
import Ticket from './pages/Ticket/Ticket';
import Chat from './pages/Chat/Chat';


const App = () => {
    
    let current_page = window.location.search;

    if(current_page === '?page=dashboard_status'){
        return (
            <>
                <Dashboard />
            </>
         );

    } else if(current_page === '?page=wcs_customer'){
        return (
        <>
            <Customer />
        </>
     );
    }
    else if(current_page === '?page=wcs_staff'){
        return (
        <>
            <Staff />   
        </>
     );
    }

     else if(current_page === '?page=wcs_department'){
        return (
            <>
                <Department />  
            </>
         );
    }
    else if(current_page === '?page=wcs_product'){
        return (
            <>
                <Product />
            </>
         );
    }
    else if(current_page === '?page=wcs_tickets'){
        return (
            <>
                <Ticket />
            </>
         );
    }
    else if(current_page === '?page=wcs_chat'){
        return (
            <>
                <Chat />
            </>
         );
    }
}

export default App; 