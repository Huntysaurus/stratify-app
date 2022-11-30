import React from "react";
import { useDispatch } from "react-redux";
import styles from './cartItem.module.css';
import { removeFromCart } from "./cartSlice";

function CartItem({ product }) {
    const dispatch = useDispatch()

    function handleRemoveFromCart(product) {
        console.log(product)
        dispatch(removeFromCart(product))    
    }

    return (
        <div className={styles.cart_item}>
            <p>{product.name}</p>
            <img style={{width:"90%"}}src={product.image} alt={product.name}/>
            <p style={{marginTop:"-1px"}}>${product.price}</p>
            <button style={{marginTop:"-10px"}} className={styles.button} onClick={()=>handleRemoveFromCart(product)}>remove</button>
        </div>
    )
}

export default CartItem