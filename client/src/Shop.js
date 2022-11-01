import React, { useEffect, useState } from "react";
import Product from "./Product";
import Search from "./Search";

function Shop({ onProductClick }) {
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

    function handleSearch(searched){
        console.log(searched)
        if (searched === Array) {
            setProducts(searched)
        } else if (searched == 0) {
            console.log('I found nothing')
        } else {
            setProducts(searched)
        }
    }

    return (
        <div>
            <Search onSearched={handleSearch}/>
            <h1>the shop page</h1>
            <div>
                {products.map(product => {
                    return <Product onProductClick={onProductClick} key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

export default Shop