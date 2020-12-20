import React from 'react';
import logo2 from "./shopping-cart-solid.svg";
function Checkout(props) {
    const total =props.database.filter((item)=>{
        if (item.bought===true){
            return item.bought;
        }
        return false;
    });

    return (
        <div className="checkout">
          <img src={logo2} alt="Logotype"/>
          <span className="counter">{total.length}</span>
        </div>
    );
}

export default Checkout;