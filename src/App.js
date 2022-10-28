import React from 'react';
// import Sidebar from './components/Sidebar';
import Customer from './pages/Customer';
import Dashboard from './pages/Dashboard';
import Department from './pages/Department';
import Product from './pages/Product';
import Staff from './pages/Staff';
import Ticket from './pages/Ticket';

const App = () => {
    let current_page = window.location.search;

    if(current_page === '?page=dashboard_status'){
        return (
            <div>
                <Dashboard />
            </div>
         );

    } else if(current_page === '?page=wcs_customer'){
        return (
        <div>
            <Customer />
        </div>
     );
    }
    else if(current_page === '?page=wcs_staff'){
        return (
        <div>
            <Staff />
        </div>
     );
    }

     else if(current_page === '?page=wcs_department'){
        return (
            <div>
                <Department />
            </div>
         );
    }
    else if(current_page === '?page=wcs_product'){
        return (
            <div>
                <Product />
            </div>
         );
    }
    else if(current_page === '?page=wcs_tickets'){
        return (
            <div>
                <Ticket />
            </div>
         );
    }
}

export default App; 