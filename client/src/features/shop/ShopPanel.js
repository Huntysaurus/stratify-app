import React from "react";
import { useSelector } from "react-redux";
import styles from './shopPanel.module.css';

function ShopPanel() {

    const reviews = useSelector(state => state.reviews.entities)

    return (
        <div className={styles.panel_holder}>
            <p>product reviews panel coming soon!</p>
        </div>
    )
}

export default ShopPanel