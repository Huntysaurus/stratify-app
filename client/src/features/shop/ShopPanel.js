import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProductDetail } from "../product/productDetailSlice";
import styles from './shopPanel.module.css';

function ShopPanel() {

    const dispatch = useDispatch()
    const navigate = useNavigate('product_detail')
    const reviews = useSelector(state => state.reviews.entities)

    function handleProductNavigation(product) {
        dispatch(setProductDetail(product))
        navigate("/product_detail")
    }

    return (
        <div className={styles.panel_holder}>
            {reviews?.map(review => {
                return (
                <div className={styles.p_review_holder}>
                    <p className={styles.product_name} >{review.product.name}</p>
                    <img className={styles.image} src={review.product.image} onClick={()=>handleProductNavigation(review.product)}/>
                    <p className={styles.rating}> {review.stars} stars</p>
                    <p className={styles.description}> {review.description}</p>
                </div>
                )
            })}
        </div>
    )
}

export default ShopPanel