import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

function ShoppingCart({ cartProducts, onRemoveClick }) {
    const navigate = useNavigate()

    let prices = []

    cartProducts?.map(product => {
        prices.push(parseFloat(product.price))
    })

    const addTotal = (prices) => {
        return prices.reduce(
            (accumulator, number) => { 
                return number + accumulator
            },
            0
        )
    }

    const total = addTotal(prices)

    console.log(total)



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