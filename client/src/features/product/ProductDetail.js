import React, { useDebugValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../cart/cartSlice";
import styles from './productDetail.module.css';

function ProductDetail({ user, productIds, onAddToCart, onRemoveFromCart }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [form, setForm] = useState(null)
    const [description, setDescription] = useState("")
    const [reviews, setReviews] = useState([])

    const productDetail = useSelector(state => state.productDetail)
    const currentUser = useSelector(state => state.user)

    useEffect(() => {
        fetch(`/product/${productDetail?.id}/reviews`)
        .then(r => r.json())
        .then(reviews => setReviews(reviews))
    }, [])

    console.log(productDetail)

    function handleSubmit(e) {
        e.preventDefault()
        setDescription("")
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                description: description,
                stars: 1,
                user_id: user.id,
                product_id: productDetail.id
            })
        }).then((r) => {
            if (r.ok) {
                r.json().then(review => onReviewSubmit(review))
            } else {
                r.json().then((err) => console.log(err))
            }
        })
    }

    function handleAddToCart() {
        dispatch(addToCart(currentUser, productDetail))
      }

    function onReviewSubmit(review) {
        const newReviews = [...reviews, review]
        setReviews(newReviews)
        alert("Review posted!")
    }

    function handleCancel(){
        setForm(null)
        setDescription("")
    }

    return (
        <div className={styles.product_detail_background}>
            {
                productIds.includes(productDetail) ?

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
                    <button className={styles.button_remove_cart_detail} onClick={()=>onRemoveFromCart(productDetail)}>remove from cart</button>
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
                    <button className={styles.button} onClick={()=>handleCancel()}>cancel</button>
                    <h1 className={styles.product_review_h} >review</h1>
                    <form onSubmit={handleSubmit}>
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
                {reviews.length > 0 ?

                reviews.map(review => {
                    return ( 
                        <div className={styles.user_reviews} key={review.id}>
                            <p style={{color: "blue"}}>@{review.user.username}</p>
                            <p>{review.description}</p>
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