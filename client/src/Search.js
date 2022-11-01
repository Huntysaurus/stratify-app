import React, { useState } from "react";

function Seach({ onSearched }) {
    const [search, setSearch] = useState("")


    function handleSubmit(e){
        e.preventDefault()
        fetch(`/search/${search}`)
        .then(r => r.json())
        .then(item => onSearched(item))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="search products"
                onChange={(e)=>setSearch(e.target.value)}
            />
            <input
                type="Submit"
            />
        </form>
    )
}

export default Seach