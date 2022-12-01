import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../product/productsSlice";
import styles from './search.module.css';

function Seach() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchProducts(search))
    }

    return (
        <form className={styles.search_form} onSubmit={handleSubmit}>
            <input
                className={styles.search_bar}
                size="50"
                type="text"
                placeholder="search products"
                onChange={(e)=>setSearch(e.target.value)}
            />
        </form>
    )
}

export default Seach