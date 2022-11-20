import React, { useState } from "react";
import CartItem from "./CartItem";
import styles from '../appStyles.module.css';

function ShoppingCart({ cartProducts, onRemoveClick }) {
    const [cartVisible, setCartVisible] = useState(false)

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
            {cartVisible ?
            <div className={styles.cart_drop_menu}>
                <button className={styles.button_cart_close} onClick={()=>setCartVisible(false)}>close</button>
            {cartProducts?.map(product => {
                return <CartItem key={product.id} onRemoveClick={onRemoveClick} product={product}/>
            })}
            <h3 className={styles.total}>Total: ${total}</h3>
            <button className={styles.checkout} >checkout</button>
        </div>
        :
      <img className={styles.cart_icon}
        src="https://static.vecteezy.com/system/resources/previews/008/134/220/original/shopping-cart-icon-shopping-cart-icon-in-trendy-design-style-free-vector.jpg"
        alt="cart"
        onClick={()=>setCartVisible(true)}
      />
        }
        </div>
    )
}

export default ShoppingCart