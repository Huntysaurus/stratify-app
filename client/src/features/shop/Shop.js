import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../product/productsSlice"
import Product from "../product/Product";
import Search from "../search/Search";
import styles from './shop.module.css';

function Shop({ productIds }) {

    const dispatch = useDispatch()
    const productItems = useSelector((state) => state.products.entities)

    const currentUser = useSelector(state => state.user)
    console.log(currentUser)
    
    useEffect(()=> {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className={styles.shop_background}>
            <Search />
            <div className={styles.products_holder} >
                {productItems?.map(product => {
                    return <Product productIds={productIds} key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

export default Shop