import React from "react";
import styles from './cartItem.module.css';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./cartSlice";

function CartItem({ product }) {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)

    function handleRemoveFromCart(product) {
        dispatch(removeFromCart(currentUser, product))    
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