import React, { useEffect, useState } from 'react';
import './Shop.css';
// import fakeData from '../../fakeData';

const Shop = () => {
   
     const [products,setProducts]= useState([])
     useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(fakeData=>setProducts(fakeData.slice(0,10)))
        
     } ,[])
  
    
    return (
        <div className='shop-container'>
           
           <div className="product-container">
            <ul>
                {
                    products.map(products=><li>{products.name}</li>)
                }
            </ul>
           </div>
          <div className="cart-container">
            <h3>This is card</h3>
          </div>
        </div>
    );
};

export default Shop;