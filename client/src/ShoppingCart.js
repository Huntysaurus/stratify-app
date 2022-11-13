import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

function ShoppingCart({ cartProducts, onRemoveClick }) {
    const navigate = useNavigate()

    return (
        <div>
            <h3>the shopping cart component</h3>
            {cartProducts?.map(product => {
                return <CartItem key={product.id} onRemoveClick={onRemoveClick} product={product}/>
            })}
        </div>
    )
}

export default ShoppingCart