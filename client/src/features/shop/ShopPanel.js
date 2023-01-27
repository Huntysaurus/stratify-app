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
                return <p>{review.description}</p>
            })}
        </div>
    )
}

export default ShopPanel