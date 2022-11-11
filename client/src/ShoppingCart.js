import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

function ShoppingCart({ cart }) {
    const navigate = useNavigate()

    console.log(cart)

    return (
        <div>
            <p>the shopping cart component</p>
            {/* <button onClick={()=>navigate('/shop')}>Shop</button> */}
        </div>
    )
}

export default ShoppingCart