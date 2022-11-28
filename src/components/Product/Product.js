import React from 'react';
import './product.css'

const Product = (props) => {
    //console.log(props.products.name)
    return (
        <div className='product'> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            <div >
                <img className="img" src={props.products.img} alt="" />
            </div>
            <div className="">
            <h4 className='product-name'>{props.products.name}</h4>
            <br />
            <div className="product-des">

            <p><small className='product-font'>By: {props.products.seller}</small></p>
            <p className='product-font'>${props.products.price}</p>
            <p><small className='product-font'>Only {props.products.stock} left in stock - oder soon</small></p>
            {/* <p>{props.products.features}</p> */}
            </div>
            <button className='product-button'> <i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
            </div>
           
        </div>
    );
};

export default Product;