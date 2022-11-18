import React from "react";
import styles from '../appStyles.module.css';

function Product({ product, onProductClick}) {

    return (
        <div className={styles.product_card} onClick={()=>onProductClick(product)}>
            <p><b>{product.name}</b></p>
            <img
                className={styles.product_c_image}
                src={product.image}
                alt={product.name}
                />
                <p>{product.category}</p>
            <p style={{marginBottom: "30px"}}>${product.price}</p>
        </div>
    )
}

export default Product