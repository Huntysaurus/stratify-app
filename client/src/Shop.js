import React, { useEffect, useState } from "react";
import Product from "./Product";
import Search from "./Search";

function Shop() {
    const [products, setProducts] = useState([])

    console.log(products)

    useEffect(()=> {
        fetch('/products')
        .then((r)=> {
            if (r.ok) {
                r.json().then((products) => setProducts(products))
            } else {
                r.json().then(err => console.log(err.errors))
            }
        })
    }, [])

    return (
        <div>
            <Search />
            <h1>the shop page</h1>
            <div>
                {products.map(product => {
                    return <Product key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

export default Shop