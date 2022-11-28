import './featured.scss'
import  MoreVertTwoTone  from '@mui/icons-material/MoreVert'
//Progreebar below
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
const percentage = 66;

  return (
    <div className='wcs_featured'>
        <div className="wcs_top">
            <h1 className="wcs_title"> Total Ticket Solved </h1>
            <MoreVertTwoTone fontSize='small'/>
        </div>
        <div className="wcs_bottom">
            <div className="wcs_featuredChart">
            <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} />
            </div>
            <p className="wcs_title">Today solved</p>
            <p className="wcs_amount">78</p>
            <p className="wcs_desc">All pending tickets need to solve urgently</p>
            <div className="wcs_summary">
                
                <div className="wcs_item">
                    <div className="itemTitle">Last month solved</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small'/>
                        <div className="resultAmount">1.2K</div>
                    </div>
                </div>
                <div className="wcs_item">
                    <div className="itemTitle">This week solved</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small'/>
                        <div className="resultAmount">160 Tickets</div>
                    </div>
                </div>
                <div className="wcs_item">
                    <div className="itemTitle">Pending</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <div className="resultAmount">10 Tickets</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured