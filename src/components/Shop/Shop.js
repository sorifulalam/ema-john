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
        <div>
            <h1>this is pad</h1>
            <h3> user {products.length}</h3>
            <ul>
                {
                    products.map(products=><li>{products.name}</li>)
                }
            </ul>
          
        </div>
    );
};

export default Shop;