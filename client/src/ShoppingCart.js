import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

function ShoppingCart({ cart }) {
    const navigate = useNavigate()
    // const items = cart.cart_items
    const products = cart.products
    console.log(products)

    return (
        <div>
            <p>the shopping cart component</p>
            {/* <button onClick={()=>navigate('/shop')}>Shop</button> */}
            {products?.map(product => {
                return <CartItem product={product}/>
            })}
        </div>
    )
}

export default ShoppingCart