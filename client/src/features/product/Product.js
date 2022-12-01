import React from "react";
import styles from './product.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../cart/cartSlice";
import { setProductDetail } from "./productDetailSlice";

function Product({ productIds, product, onShopRemove}) {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.user)

    function handleAddToCart(product) {
        dispatch(addToCart(currentUser, product))
    }

    function handleProductNavigation(product) {
        dispatch(setProductDetail(product))
        console.log(product)
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
                    <button className={styles.product_remove} onClick={()=>onShopRemove(product)}>-</button>
                </div>

                :
                
                <div className={styles.product_card}>
                    <p><b>{product.name}</b></p>
                    <img
                        onClick={()=>handleProductNavigation(product)}
                        className={styles.product_c_image}
                        src={product.image}
                        alt={product.name}
                        title='details'
                    />
                    <p>{product.category}</p>
                    <p style={{marginBottom: "30px"}}>${product.price}</p>
                    <button className={styles.product_add} onClick={()=>handleAddToCart(product)}>+</button>
                </div>
            }
        </>
    )
}

export default Product