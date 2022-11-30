import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../product/productsSlice"
import Product from "../product/Product";
import Search from "../search/Search";
import styles from './shop.module.css';

function Shop({ productIds, cartProducts, onShopAdd, onShopRemove }) {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const productItems = useSelector((state) => state.products.entities)

    const currentUser = useSelector(state => state.user)
    console.log(currentUser)

    function onFetchCart(products) {
        // import { addCartItem } from "./features/cart/cartItemsSlice";
    // products.forEach(product => dispatch(addCartItem(product)))
    }
    
    useEffect(()=> {
        dispatch(fetchProducts())
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
                {productItems?.map(product => {
                    return <Product productIds={productIds} key={product.id} product={product} onShopAdd={onShopAdd} onShopRemove={onShopRemove} />
                })}
            </div>
        </div>
    )
}

export default Shop