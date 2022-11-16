import React from "react";
import styles from '../appStyles.module.css';

function Review({ review }) {
    return (
        <div className={styles.review_card}>
            <h2>{review.product.name}</h2>
            <h3>category: {review.product.category}</h3>
            <h3>price: ${review.product.price}</h3>
            <img className={styles.review_image} src={review.product.image} alt={review.product.name}/>
            <h3>{review.description}</h3>
        </div>
    )
}

export default Review