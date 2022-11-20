import React from "react";
import styles from '../appStyles.module.css';

function Order({ order }) {
    const orderProducts = order.products
    console.log(orderProducts)

    return (
        <div className={styles.order_card}>

            {orderProducts?.map(product => {
                return <div className={styles.order_details}>
                    <h3 style={{color:"#232323"}}>{product.name}</h3>
                    <p>{product.category}</p>
                    <p>cost: ${product.price}</p>
                </div>
            })}
        </div>
    )
}

export default Order