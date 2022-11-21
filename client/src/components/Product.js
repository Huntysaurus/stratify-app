import React from "react";
import styles from '../appStyles.module.css';

function Product({ cartProducts, product, loading, onProductClick, onShopAdd, onShopRemove}) {

    // add loading functionality

    let productIds = []

    cartProducts.forEach(product => 
        productIds = [...productIds, product.id]
    )

    return (
        <>
            {
                productIds.includes(product.id) ?

                <div className={styles.product_card_remove}>
                    <p><b>{product.name}</b></p>
                    <img
                        onClick={()=>onProductClick(product)}
                        className={styles.product_c_image_remove}
                        src={product.image}
                        alt={product.name}
                        title='in cart'
                    />
                    <p className={styles.in_cart}>IN CART</p>
                    <p style={{marginBottom: "30px"}}>${product.price}</p>
                    <button className={styles.product_remove} onClick={(e)=>onShopRemove(product)}>-</button>
                </div>

                :
                
                <div className={styles.product_card}>
                    <p><b>{product.name}</b></p>
                    <img
                        onClick={()=>onProductClick(product)}
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