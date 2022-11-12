import React from "react";

function CartItem({ product }) {

    function onRemoveClick() {
        console.log(product.id)
        fetch(`/cart_items/${product.id}`, {
            method: "DELETE",
        })
    }

    return (
        <div>
            <p>{product.name}</p>
            <button onClick={(e)=>onRemoveClick(e.target.value)}>remove</button>
        </div>
    )
}

export default CartItem