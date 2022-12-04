import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../cart/cartSlice";
import { createReview, deleteProductReview, deleteReview, fetchProductReviews } from "../review/reviewsSlice";
import styles from './productDetail.module.css';

function ProductDetail() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [form, setForm] = useState(null)
    const [description, setDescription] = useState("")
    const productDetail = useSelector(state => state.productDetail)
    const currentUser = useSelector(state => state.user)
    const reviews = useSelector(state => state.reviews.entities)
    const cartProducts = useSelector(state => state.cart.products)

    let productIds = []

    cartProducts?.forEach(product => 
        productIds = [...productIds, product.id]
    )

    useEffect(() => {
        dispatch(fetchProductReviews(productDetail))
    }, [])

    function handleSubmitReview(e) {
        e.preventDefault()
        dispatch(createReview(currentUser, productDetail, description))
        setDescription("")
        setForm(null)
    }

    function handleDeleteReview(review) {
        dispatch(deleteProductReview(review, productDetail))
    }

    function handleAddToCart() {
        dispatch(addToCart(currentUser, productDetail))
    }

    function handleRemoveFromCart(productDetail) {
        dispatch(removeFromCart(currentUser, productDetail))
    }

    function handleCancelReview(){
        setForm(null)
        setDescription("")
    }

    return (
        <div className={styles.product_detail_background}>
            {
                productIds.includes(productDetail.id) ?

                <div className={styles.product_detail_remove}>
                    <h3 className={styles.product_detail_h}>{productDetail.name}</h3>
                    <h1 onClick={()=>navigate("/shop")} className={styles.in_cart_detail}>IN CART</h1>
                    <img
                        src={productDetail.image}
                        alt={productDetail.name}
                        onClick={()=>navigate("/shop")}
                        style={{cursor:"pointer"}}
                        title="back to shop"
                        />
                    <p>{productDetail.category}</p>
                    <p className={styles.product_price}>${productDetail.price}</p>
                    <p>{productDetail.description}</p>
                    <button className={styles.button_remove_cart_detail} onClick={()=>handleRemoveFromCart(productDetail)}>remove from cart</button>
                </div>

            :

                <div className={styles.product_detail}>
                    <h3 className={styles.product_detail_h}>{productDetail?.name}</h3>
                    <img
                        src={productDetail?.image}
                        alt={productDetail?.name}
                        onClick={()=>navigate("/shop")}
                        style={{cursor:"pointer"}}
                        title="back to shop"
                        />
                    <p>{productDetail?.category}</p>
                    <p className={styles.product_price}>${productDetail?.price}</p>
                    <p>{productDetail?.description}</p>
                <button className={styles.button_add_cart_detail} onClick={handleAddToCart}>add to cart</button>
            </div>

            }

            { form ?
                <div className={styles.detail_review_holder}>
                    <button className={styles.button} onClick={()=>handleCancelReview()}>cancel</button>
                    <h1 className={styles.product_review_h} >review</h1>
                    <form onSubmit={handleSubmitReview}>
                        <textarea
                            type="text"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                        />
                        <br/>
                        <button className={styles.button} type="submit" >post review</button>
                    </form>
                </div>
            :
                <button className={styles.button_review_detail} onClick={()=>setForm(true)}>write a review</button>
            }
            <div className={styles.detail_reviews_list}>
                {reviews?.length > 0 ?

                reviews.map(review => {
                    return ( 
                        <div className={styles.user_reviews} key={review.id}>
                            <p style={{color: "blue"}}>@{review.user.username}</p>
                            <p>{review.description}</p>
                            {
                                currentUser.id === review.user_id ?

                                <button className={styles.button_remove_review} onClick={()=>handleDeleteReview(review)}>remove review</button>
                                :
                                null
                            }
                        </div>
                    )
                })

                :

                <p className={styles.no_history_text}>no reviews yet</p>
                }
            </div>
        </div>
    )
}

export default ProductDetail 