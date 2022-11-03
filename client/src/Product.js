import React from "react";

function Product({ product, onProductClick}) {

    return (
        <div>
            <h3>{product.name}</h3>
            <img
                src={product.image}
                alt={product.name}
                onClick={()=>onProductClick(product)}
                />
        </div>
    )
}

export default Product