import React from "react";
import styles from './product.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../cart/cartSlice";
import { setProductDetail } from "./productDetailSlice";

function Product({ product }) {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.user)
    const cartProducts = useSelector(state => state.cart.products)

    let productIds = []

    cartProducts?.forEach(product => 
        productIds = [...productIds, product.id]
    )

    function handleAddToCart(product) {
        productIds.push(product.id)
        dispatch(addToCart(currentUser, product))
    }

    function handleRemoveFromCart(productDetail) {
        dispatch(removeFromCart(currentUser, productDetail))
    }

    function handleProductNavigation(product) {
        dispatch(setProductDetail(product))
        navigate("/product_detail")
    }

    return (
        <>
            {
                productIds.includes(product.id) ?

                <div className={styles.product_card_remove}>
                    <p><b>{product.name}</b></p>
                    <img
                        onClick={()=>handleProductNavigation(product)}
                        className={styles.product_c_image_remove}
                        src={product.image}
                        alt={product.name}
                        title='in cart'
                    />
                    <p onClick={()=>handleProductNavigation(product)} className={styles.in_cart}>IN CART</p>
                    <p style={{marginBottom: "30px"}}>${product.price}</p>
                </div>

                :
                
                <div className={styles.product_card}>
                    <p className={styles.product_text} ><b>{product.name}</b></p>
                    <img
                        onClick={()=>handleProductNavigation(product)}
                        className={styles.product_c_image}
                        src={product.image}
                        alt={product.name}
                        title='details'
                    />
                    <p className={styles.product_text}>{product.category}</p>
                    <p className={styles.product_text}>${product.price}</p>
                    <button className={styles.product_add} onClick={()=>handleAddToCart(product)}>add</button>
                </div>
            }
        </>
    )
}

export default Product