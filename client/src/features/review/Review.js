import React from "react";
import { useDispatch } from "react-redux";
import styles from './review.module.css';
import { deleteUserReview } from "./reviewsSlice";

function Review({ review }) {
    const dispatch = useDispatch()
    const rating = [...Array(review.stars)]

    function handleDeleteReview(review) {
        dispatch(deleteUserReview(review, review.product))
    }

    return (
        <div className={styles.review_card}>
            {rating.map(() => {
                return <span key={rating.index} className={styles.star}>&#9733;</span>
            })}
            <div className={styles.review_text}>
                <h2>{review.product.name}</h2>
                <h3>category: {review.product.category}</h3>
                <h3>price: ${review.product.price}</h3>
            </div>
            <img className={styles.review_image} src={review.product.image} alt={review.product.name}/>
            <h3>@{review.user.username}: {review.description}</h3>
            <button onClick={(()=>handleDeleteReview(review))} className={styles.button_remove_review}>delete review</button>
        </div>
    )
}

export default Review