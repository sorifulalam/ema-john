import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    const cart =props.cart;
    const totalPrice = cart.reduce((total,prd) =>total+prd.price, 0);
 
    let  shipping =0;
    if(totalPrice>70){
        shipping=0;
    }
   else if(totalPrice>15){
        shipping=4.99;
    }
    else if(totalPrice>0){
        shipping=12.99;
    }
    


    return (
        <div className='order-summery'>
            <h3>Order Summary</h3>
            <p>Items-Orderd: {cart.length}</p>
            <p>product Price: {totalPrice}</p>
           <p><small>Shipping Cost:{shipping}</small></p>
            <p>Total Price: {totalPrice + shipping}</p>
        </div>
    );
};

export default Cart;