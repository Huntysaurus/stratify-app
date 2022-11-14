import React from "react";

function CartItem({ product, onRemoveClick }) {

    return (
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={()=>onRemoveClick(product)}>remove</button>
        </div>
    )
}

export default CartItem