import React from "react";

function Review({ review }) {
    return (
        <div>
            <h2>{review.product.name}</h2>
            <h3>category: {review.product.category}</h3>
            <h3>price: ${review.product.price}</h3>
            <img src={review.product.image} />
            <h3>{review.description}</h3>
        </div>
    )
}

export default Review