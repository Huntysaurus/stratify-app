import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductDetail({ product }) {
    const navigate = useNavigate()
    const [form, setForm] = useState(null)
    const [review, setReview] = useState("")

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
                    <form>
                        <textarea
                            type="text"
                            value={review}
                            onChange={(e)=>setReview(e.target.value)}
                        />
                    </form> 
                </div>
            :
                <button onClick={()=>setForm(true)}>write a review</button>
            }
        </div>
    )
}

export default ProductDetail 