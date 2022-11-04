import wcs_spinner from '../../../assets/img/spinner.svg'
import "./spinner.scss";
const Spinner = () => {
  return (
    <div className='wcs_spinner'>
        <img src={wcs_spinner} alt=">>>" />
    </div>
  )
}

export default Spinner