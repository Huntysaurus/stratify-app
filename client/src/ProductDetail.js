import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductDetail({ user, product, cart }) {
    const navigate = useNavigate()
    const [form, setForm] = useState(null)
    const [description, setDescription] = useState("")
    const [reviews, setReviews] = useState([])

    console.log(cart)

    useEffect(() => {
        fetch(`/products/${product.id}/reviews`)
        .then(r => r.json())
        .then(reviews => setReviews(reviews))
    }, [product.id])

    function handleSubmit(e) {
        e.preventDefault()
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
                r.json().then(alert('review posted!'))
                
            } else {
                r.json().then((err) => console.log(err))
            }
        })
    }

    function handleOnAddToCart() {
        fetch(`/cart_items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cart_id: cart.id,
                product_id: product.id
            })
        }).then((r) => {
            if (r.ok) {
                r.json().then(alert('item added to cart'))
                
            } else {
                r.json().then((err) => console.log(err))
            }
        })
    }

    return (
        <div>
            <div>
                <h3>{product.name}</h3>
                <img
                    src={product.image}
                    alt={product.name}
                    onClick={()=>navigate("/shop")}
                    />
                <p>{product.category}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <button onClick={handleOnAddToCart}>add to cart</button>
            </div>

            { form ?
                <div>
                    <h1>review</h1>
                    <button onClick={()=>setForm(null)}>cancel</button>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            type="text"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                        />
                        <button type="submit" >post review</button>
                    </form>
                </div>
            :
                <button onClick={()=>setForm(true)}>write a review</button>
            }
            <div>
                {reviews.map(review => {
                    return (
                        <div key={review.id}>
                            <li>{review.user.username}</li>
                            <li>{review.description}</li>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductDetail 