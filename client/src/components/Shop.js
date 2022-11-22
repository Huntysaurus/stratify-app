import React, { useEffect, useState } from "react";
import Product from "./Product";
import Search from "./Search";
import styles from '../appStyles.module.css';

function Shop({ productIds, cartProducts, onProductClick, onShopAdd, onShopRemove }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    console.log(products.length)
    
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
        if (searched === true) {
            setProducts(searched)
        } else if (searched === []) {
            console.log('I found nothing')
        } else {
            setProducts(searched)
        }
    }

    return (
        <div className={styles.shop_background}>
            <Search onSearched={handleSearch}/>
            <div className={styles.products_holder} >
                {products.map(product => {
                    return <Product cartProducts={cartProducts} productIds={productIds} onProductClick={onProductClick} key={product.id} product={product} onShopAdd={onShopAdd} onShopRemove={onShopRemove} loading={loading}/>
                })}
            </div>
        </div>
    )
}

export default Shop