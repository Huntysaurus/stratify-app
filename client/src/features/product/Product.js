import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from './product.module.css';
import { setProductDetail } from "./productDetailSlice";

function Product({ productIds, product, onProductClick, onShopAdd, onShopRemove}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // add loading functionality

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
                    <button className={styles.product_remove} onClick={(e)=>onShopRemove(product)}>-</button>
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
                    <button className={styles.product_add} onClick={(e)=>onShopAdd(product)}>+</button>
                </div>
            }
        </>
    )
}

export default Product