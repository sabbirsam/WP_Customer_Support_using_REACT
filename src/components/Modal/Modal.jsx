import React from 'react'
import Countdown from 'react-countdown';
import './modal.scss'

const Modal = ({ setOpenModal }) => {
  return (
    <div className="wcsmodalBackground">
   {/* <div class="wcs_popup_overlay"></div> */}
      <div className="wcsmodalContainer">
        <div className="wcstitleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="wcsmodaltitle">
          <h1>Unlock access to all feature</h1>
          <h1 className='wcs_offer_percentage'><span className='wcs_count'>75%</span> <span className='wcs_count_text'>OFF</span></h1>
          <h3><span className='wcs_star'>★★★★★</span></h3>
          {/* <h1>10:10:10</h1> */}
          { <Countdown className='wcs_timer'
              date={Date.now() + 871986400}>
              <Modal />
            </Countdown>
          }
        </div>
        <div className="wcsmodalbody">
          <p>Upgrade to get access to all feature!</p>
        </div>
        <div className="wcsmodalfooter">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Modal