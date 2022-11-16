import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../appStyles.module.css';

function Navbar({ onLogoutClick }) {
    const navigate = useNavigate()

    function handleNavigation(e) {
        if (e === "/logout") {
            onLogoutClick()
        } else {
            navigate(e)
        }
    }

    return(
            <div className={styles.navbar}>
                <select className={styles.menu} onChange={(e)=>handleNavigation(e.target.value)}>
                    <option value={"/shop"}>
                        menu
                    </option>
                    <option value={"/profile"} >
                        profile
                    </option>
                    <option value={"/cart"}>
                        cart
                    </option>
                    <option value={"/logout"}>
                        logout
                    </option>
                </select>
            </div>
    )
}

export default Navbar
