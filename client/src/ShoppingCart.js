import React from "react";
import { useNavigate } from "react-router-dom";

function ShoppingCart({ cart }) {
    const navigate = useNavigate()

    console.log(cart)

    return (
        <div>
            <button onClick={()=>navigate('/shop')}>Shop</button>
            <p>shopping cart</p>
        </div>
    )
}

export default ShoppingCart