import App from "./App";
import { render } from '@wordpress/element';
import './style/main.scss';

let current_page = window.location.search;
console.log(current_page);

// Render the App component into the DOM
if(current_page === '?page=dashboard_status'){
    render(<App />, document.getElementById('wcs_dashboard'));
}
else if(current_page === '?page=wcs_customer'){
    render(<App />, document.getElementById('wcs_customer'));
}
else if(current_page === '?page=wcs_staff'){
    render(<App />, document.getElementById('wcs_staff'));
}
 else if(current_page === '?page=wcs_department'){
    render(<App />, document.getElementById('wcs_department'));
}
else if(current_page === '?page=wcs_product'){
    render(<App />, document.getElementById('wcs_product'));
}
else if(current_page === '?page=wcs_tickets'){
    render(<App />, document.getElementById('wcs_ticket'));
}