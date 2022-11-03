import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductDetail({ user, product }) {
    const navigate = useNavigate()
    const [form, setForm] = useState(null)
    const [review, setReview] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                description: review,
                stars: 1,
                user_id: user.id
            })
        }).then((r) => {
            if (r.ok) {
                r.json().then(alert('review posted!'))
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
                <button onClick={()=>console.log("needs add to cart functionality")}>add to cart</button>
            </div>

            { form ?
                <div>
                    <h1>review</h1>
                    <button onClick={(e)=>setForm(null)}>cancel</button>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            type="text"
                            value={review}
                            onChange={(e)=>setReview(e.target.value)}
                        />
                        <button type="submit" >post review</button>
                    </form>
                </div>
            :
                <button onClick={()=>setForm(true)}>write a review</button>
            }
        </div>
    )
}

export default ProductDetail 