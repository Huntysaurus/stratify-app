import React, { useState } from "react";
import styles from '../appStyles.module.css';

function Seach({ onSearched }) {
    const [search, setSearch] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/search/${search}`)
        .then(r => r.json())
        .then(item => onSearched(item))
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