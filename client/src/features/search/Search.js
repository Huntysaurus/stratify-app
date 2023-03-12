import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, searchProducts } from "../product/productsSlice";
import styles from './search.module.css';

function Seach() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const vendors = useSelector(state => state.vendors.entities)

    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchProducts(search))
    }

    function handleFilter(id){
        dispatch(filterProducts(id))
    }

    return (
        <>
            <form className={styles.search_form} onSubmit={handleSubmit}>
            <input
                className={styles.search_bar}
                size="50"
                type="text"
                placeholder="search products"
                onChange={(e)=>setSearch(e.target.value)}
            />
            </form>
            <select className={styles.vendor_filter} onChange={(e)=>handleFilter(e.target.value)}>
                    <option value={""}>
                        filter by vendor
                    </option>
                    <option value={""}>
                        all
                    </option>
                    {vendors?.map(vendor => {
                        return <option key={vendor.id} value={vendor.id}>{vendor.name}</option>
                    })}
                </select>
        </>
    )
}

export default Seach