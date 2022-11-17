import React, { useReducer } from "react";
import styles from '../appStyles.module.css';

function Review({ review }) {
    return (
        <div className={styles.review_card}>
            <div className={styles.review_text}>
                <h2>{review.product.name}</h2>
                <h3>category: {review.product.category}</h3>
                <h3>price: ${review.product.price}</h3>
            </div>
            <img className={styles.review_image} src={review.product.image} alt={review.product.name}/>
            <h3>@{review.user.username}: {review.description}</h3>
        </div>
    )
}

export default Review