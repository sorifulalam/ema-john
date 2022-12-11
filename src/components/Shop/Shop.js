import React, { useEffect, useState } from 'react';
import './Shop.css';
// import fakeData from '../../fakeData';
import Product from './../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
   
     const [products,setProducts]= useState([])
     const [cart  , setCart] = useState([])
     useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res=>res.json())
        .then(fakeData=>setProducts(fakeData.slice(0,20)))
        
     } ,[])

     
     //buttons functions 
     
     const handelProduct = (products)=>{
        console.log('shetu', products)
        const newCart = [...cart , products]
        setCart(newCart)
        
     }
    
    return (
        <div className='shop-container'>
           
           <div className="product-container">
            <ul>
                {
                    products.map(pd=><Product handelProduct={handelProduct} products ={pd}> </Product>)
                }
            </ul>
           </div>
          <div className="cart-container">
            <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;