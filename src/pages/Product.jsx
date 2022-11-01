import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Product = () => {
  return (
    <div className='wcs_home'>
      <Sidebar/>
      <div className="wcs_homeContainer">
        <Navbar/>
          <div className="wcs_product_cls" id="wcs_product">
              <div className="wcs_widgets">
                <h2>Product</h2>
              </div>
          </div>
      </div>
 
    </div>
  )
}

export default Product