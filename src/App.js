import  WCSTab  from './pages/Tab/WCSTab';
import  WCSSettings  from './pages/Tab/WCSSettings';
import Documentation from './pages/Documentation/Documentation';

const App = () => {
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
        return (
            <div className="wcs_plug" id='wcs_plug_start'>
                <WCSTab />
            </div>
        );
    }else if(current_page === '?page=wcs_setting'){
        return (
        <div className="wcs_plug" id='wcs_plug_start'>
            <WCSSettings/>
        </div>
     );
    }
    else if(current_page === '?page=wcs_documentation'){
        return (
        <div className="wcs_plug" id='wcs_plug_start'>
           <Documentation/>
        </div>
     );
    }
    else if(path === 'get-support'){
        return (
        <div className="wcs_plug" id='wcs_plug_start'>
            <WCSTab />
        </div>
     );
    }
    
    // else{
    //     return (
    //         <div className="wcs_plug" id='wcs_plug_start'>
    //             <WCSTab />
    //         </div>
    //     );
    // }
 
}


export default App; 