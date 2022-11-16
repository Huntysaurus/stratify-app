import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../appStyles.module.css';

function Navbar({ onLogoutClick }) {

    // create a dropdown menu for navlinks

    return(
            <div className={styles.navbar}>
                <button onClick={onLogoutClick}>logout</button>
                <NavLink to="/profile">
                    profile
                </NavLink>
                <NavLink to="/cart">
                    cart
                </NavLink>
            </div>
    )
}

export default Navbar
