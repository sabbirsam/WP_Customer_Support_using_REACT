import React from 'react';
import Customer from './pages/Customer';
import Dashboard from './pages/Dashboard';
import Department from './pages/Department';
import Product from './pages/Product';
import Staff from './pages/Staff';
import Ticket from './pages/Ticket';
import Chat from './pages/Chat';

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