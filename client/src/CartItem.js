import React from "react";

function CartItem({ product }) {

    console.log(product.name)
    return (
        <p>{product.name}</p>
    )
}

export default CartItem