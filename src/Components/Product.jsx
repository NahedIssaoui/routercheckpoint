import React from 'react'
import Item from './Item'
import { NavLink } from 'react-router-dom';
import products from './products';
import Navbar from './Navigationbar';

function Product() {
  return (
  <>
    <Navbar />
      <div style={{ display: "flex", gap: "20px" }}>
      {products.map((product, index) =>
         <NavLink to={index.toString()}>
            <Item product={product}></Item>
         </NavLink>)}
      </div>

   </>
  )
}

export default Product
