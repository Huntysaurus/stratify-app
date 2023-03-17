import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import styles from './shoppingCart.module.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../order/ordersSlice";

function ShoppingCart() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartProducts = useSelector(state => state.cart.products)
    const currentUser = useSelector(state => state.user)

    console.log(cartProducts)
    console.log(currentUser)

    useEffect(()=> {
        navigate("/profile")
    }, [])

    useEffect(() => {
        dispatch(fetchCart(currentUser))
    },[])
    
    const [cartVisible, setCartVisible] = useState(false)

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

    function onCheckoutClick() {
        if (cartProducts.length === 0) {
          alert('no items in cart')
        } else {
          const response = window.confirm('Are you sure you want to checkout?')
          if (response) {
            dispatch(createOrder(currentUser, total))
            dispatch(fetchCart(currentUser))
          } else {
            return
          }
        }
      }

    const total = addTotal(prices).toFixed(2)

    return (
        <div>
            {cartVisible ?
            <div className={styles.cart_drop_menu}>
                <button className={styles.button_cart_close} onClick={()=>setCartVisible(false)}>close</button>
            {cartProducts?.map(product => {
                return <CartItem key={product.id} product={product}/>
            })}
            <h3 className={styles.total}>Total: ${total}</h3>
            <button onClick={()=>onCheckoutClick()} className={styles.checkout} >checkout</button>
        </div>
        :
        <>
            <img className={styles.cart_icon}
            src="https://static.vecteezy.com/system/resources/previews/008/134/220/original/shopping-cart-icon-shopping-cart-icon-in-trendy-design-style-free-vector.jpg"
            alt="cart"
            onClick={()=>setCartVisible(true)}
            />
            <p className={styles.cart_count}>{cartProducts?.length}</p>
        </>
        }
        </div>
    )
}

export default ShoppingCart