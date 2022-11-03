// import React from 'react'
import DataTableStaff from '../../components/Data-Table-Staff/DataTableStaff'
import "./product.scss";

const Product = () => {
  return (
  
    <div className="product_active" id='wcs_product'>
        <div className="addTicketbtn_p">ADD PRODUCT</div>
        <DataTableStaff/>
    </div>

  )
}

export default Product