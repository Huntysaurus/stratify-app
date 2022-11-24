import React from "react";
import styles from './cartItem.module.css';

function CartItem({ product, onRemoveClick }) {

    return (
        <div className={styles.cart_item}>
            <p>{product.name}</p>
            <img style={{width:"90%"}}src={product.image}/>
            <p style={{marginTop:"-1px"}}>${product.price}</p>
            <button style={{marginTop:"-10px"}} className={styles.button} onClick={()=>onRemoveClick(product)}>remove</button>
        </div>
    )
}

export default CartItem