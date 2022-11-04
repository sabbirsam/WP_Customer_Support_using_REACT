import  WCSTab  from './pages/Tab/WCSTab';
const App = () => {
    let current_page = window.location.search;
    if(current_page === '?page=dashboard_status'){
    return (
        <div className="wcs_plug" id='wcs_plug_start'>
            <WCSTab />
        </div>
    );
    }else if(current_page === '?page=wcs_setting'){
        return (
        <div className="wcs_plug" id='wcs_plug_start'>
            Settings from React
        </div>
     );
    }
    else if(current_page === '?page=wcs_documentation'){
        return (
        <div className="wcs_plug" id='wcs_plug_start'>
           Documentation from React
        </div>
     );
    }
}


export default App; 