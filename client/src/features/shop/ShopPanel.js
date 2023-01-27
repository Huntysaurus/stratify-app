import React from "react";
import Review from "../review/Review";
import { useSelector } from "react-redux";
import styles from './shopPanel.module.css';

function ShopPanel() {

    const reviews = useSelector(state => state.reviews.entities)
    console.log(reviews)

    return (
        <div className={styles.panel_holder}>
            {reviews.map(review => {
                return (
                <div className={styles.p_review_holder}>
                    <p className={styles.product_name} >{review.product.name}</p>
                    <img className={styles.image} src={review.product.image}/>
                    <p className={styles.rating}> {review.stars} stars</p>
                    <p className={styles.description}> {review.description}</p>
                </div>
                )
            })}
        </div>
    )
}

export default ShopPanel