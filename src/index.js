import App from "./App";
import { render } from '@wordpress/element';

let current_page = window.location.search;
if(current_page === '?page=dashboard_status'){
    render(<App />, document.getElementById('wcs_dashboard'));
}
else if(current_page === '?page=wcs_setting'){
    render(<App />, document.getElementById('wcs_setting'));
}
else if(current_page === '?page=wcs_documentation'){
    render(<App />, document.getElementById('wcs_documentation'));
}