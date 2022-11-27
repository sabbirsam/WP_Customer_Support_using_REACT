import App from "./App";
import { render } from '@wordpress/element';

   /**
     * Admin page
     */
    let current_page = window.location.search;
    /**
     * Get front page
     */
     let url=window.location.href
     let lastPart = url.split("/");
     let path = lastPart[lastPart.length-2];


if(current_page === '?page=dashboard_status'){
    render(<App />, document.getElementById('wcs_dashboard'));
}
else if(current_page === '?page=wcs_setting'){
    render(<App />, document.getElementById('wcs_setting'));
}
else if(current_page === '?page=wcs_documentation'){
    render(<App />, document.getElementById('wcs_documentation'));
}
else if(path === 'get-support'){
    render(<App />, document.getElementById('wcs_dashboard'));
}
// else{
//     render(<App />, document.getElementById('wcs_dashboard'));
// }
