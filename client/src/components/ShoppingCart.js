import React from "react";
import CartItem from "./CartItem";

function ShoppingCart({ cartProducts, onRemoveClick }) {

    console.log(cartProducts)

    let prices = []

    cartProducts?.map(product => {
        return prices.push(parseFloat(product.price))
    })

    const addTotal = (prices) => {
        return prices.reduce(
            (accumulator, number) => { 
                return number + accumulator
            },
            0
        )
    }

    const total = addTotal(prices).toFixed(2)

    return (
        <div>
            <h2>the shopping cart component</h2>
            {cartProducts?.map(product => {
                return <CartItem key={product.id} onRemoveClick={onRemoveClick} product={product}/>
            })}
            <h3>Total: ${total}</h3>
        </div>
    )
}

export default ShoppingCart