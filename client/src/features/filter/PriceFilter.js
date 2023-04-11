import React from "react";
import styles from "./priceFilter.module.css"

function PriceFilter() {
    return (
        <>
            <select className={styles.select_holder}>
                <option>
                    price filter
                </option>
            </select>
        </>
    )
}

export default PriceFilter