import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../product/Product";
import { fetchAllReviews } from "../review/reviewsSlice";
import Search from "../search/Search";
import styles from './shop.module.css';
import ShopPanel from "./ShopPanel";

function Shop({ productIds }) {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.entities)
    const errorMessage = useSelector(state => state.errors)

    useEffect(()=> {
        dispatch(fetchAllReviews())
    }, [])

    return (
        <div>
            <div className={styles.shop_background}>
                <p className={styles.error_message}>{errorMessage.errors}</p>
                <Search />
                <div className={styles.products_holder} >
                    {products?.map(product => {
                        return <Product productIds={productIds} key={product.id} product={product} />
                    })}
                </div>
            </div>
            <ShopPanel />
        </div>
    )
}

export default Shop