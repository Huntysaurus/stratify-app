import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductDetail({ user, product, cartProducts, onCartItemCreated }) {
    const navigate = useNavigate()
    const [form, setForm] = useState(null)
    const [description, setDescription] = useState("")
    const [reviews, setReviews] = useState([])

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
                // window.location.reload()
                
            } else {
                r.json().then((err) => console.log(err))
            }
        })
    }

    function handleAddToCart() {
        fetch(`/cart_items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cart_id: user.cart.id,
                product_id: product.id
            })
        }).then((r) => {
            if (r.ok) {
                r.json().then(cartItem => onCartItemCreated(cartItem))
                
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
                <button onClick={handleAddToCart}>add to cart</button>
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
                {reviews?.map(review => {
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