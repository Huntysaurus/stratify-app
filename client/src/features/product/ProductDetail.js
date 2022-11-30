import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './productDetail.module.css';

function ProductDetail({ user, product, productIds, onAddToCart, onRemoveFromCart }) {
    const navigate = useNavigate()
    const [form, setForm] = useState(null)
    const [description, setDescription] = useState("")
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`/product/${product.id}/reviews`)
        .then(r => r.json())
        .then(reviews => setReviews(reviews))
    }, [])

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
                product_id: product.id
            })
        }).then((r) => {
            if (r.ok) {
                r.json().then(review => onReviewSubmit(review))
            } else {
                r.json().then((err) => console.log(err))
            }
        })
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
                productIds.includes(product.id) ?

                <div className={styles.product_detail_remove}>
                    <h3 className={styles.product_detail_h}>{product.name}</h3>
                    <h1 onClick={()=>navigate("/shop")} className={styles.in_cart_detail}>IN CART</h1>
                    <img
                        src={product.image}
                        alt={product.name}
                        onClick={()=>navigate("/shop")}
                        style={{cursor:"pointer"}}
                        title="back to shop"
                        />
                    <p>{product.category}</p>
                    <p className={styles.product_price}>${product.price}</p>
                    <p>{product.description}</p>
                    <button className={styles.button_remove_cart_detail} onClick={()=>onRemoveFromCart(product)}>remove from cart</button>
                </div>

            :

                <div className={styles.product_detail}>
                    <h3 className={styles.product_detail_h}>{product.name}</h3>
                    <img
                        src={product.image}
                        alt={product.name}
                        onClick={()=>navigate("/shop")}
                        style={{cursor:"pointer"}}
                        title="back to shop"
                        />
                    <p>{product.category}</p>
                    <p className={styles.product_price}>${product.price}</p>
                    <p>{product.description}</p>
                <button className={styles.button_add_cart_detail} onClick={()=>onAddToCart(product)}>add to cart</button>
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