import React from "react";
import styles from '../appStyles.module.css';

function Product({ product, onProductClick}) {

    return (
        <div className={styles.product_card}>
            <p>{product.name}</p>
            <img
                className={styles.product_c_image}
                src={product.image}
                alt={product.name}
                onClick={()=>onProductClick(product)}
                />
        </div>
    )
}

export default Product