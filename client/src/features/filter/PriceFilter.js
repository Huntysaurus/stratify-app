import React from "react";
import styles from "./priceFilter.module.css"

function PriceFilter() {
    return (
        <>
            <select className={styles.select_holder}>
                <option>
                    price filter(test)
                </option>
                <option value={"100"}>
                    100
                </option>
                <option value={"200"}>
                    200
                </option>
                <option value={"300"}>
                    300
                </option>
            </select>
        </>
    )
}

export default PriceFilter