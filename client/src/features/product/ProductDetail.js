import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../cart/cartSlice";
import { createReview, deleteProductReview, fetchProductReviews } from "../review/reviewsSlice";
import styles from './productDetail.module.css';

function ProductDetail() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const stars = [...Array(5)]
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

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
        dispatch(createReview(currentUser, productDetail, description, rating))
        setDescription("")
        setForm(null)
        setRating(0)
        setHover(0)
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
                    <button className={styles.button_alt} onClick={()=>handleCancelReview()}>cancel</button>
                    <h1 className={styles.product_review_h} >review</h1>
                    <form onSubmit={handleSubmitReview}>
                        <textarea
                            type="text"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                        />
                        <br/>
                        <button className={styles.button_post_review} type="submit" >post review</button>
                    </form>
                    <div className={styles.star_rating}>
                        <p className={styles.rating_text}>rating</p>
                        {stars.map((star, index) => {
                            index += 1;
                            return (
                              <button
                                key={index}
                                className={index <= (hover || rating) ? styles.on : styles.off}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                              >
                                <span className={styles.star}>&#9733;</span>
                              </button>
                            );
                        })}
                    </div>
                </div>
            :
                <button className={styles.button_review_detail} onClick={()=>setForm(true)}>write a review</button>
            }
            <div className={styles.detail_reviews_list}>
                {reviews?.length > 0 ?

                reviews.map(review => {
                    const rating = [...Array(review.stars)]
                    return (
                        <div className={styles.user_reviews} key={review.id}>
                            {rating.map(() => {
                                return <span key={rating.index} className={styles.star}>&#9733;</span>
                            })}
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