import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../user/usersSlice";
import styles from './navbar.module.css';

function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logoutUser())
        navigate('/')
    }

    function handleNavigation(e) {
        if (e === "/logout") {
            handleLogout();
        } else if (e === "") {
            return
        } else {
            navigate(e)
        }
    }

    return(
            <div className={styles.navbar}>
                <select className={styles.menu} onChange={(e)=>handleNavigation(e.target.value)}>
                    <option value={""}>
                        menu
                    </option>
                    <option value={"/shop"}>
                        shop
                    </option>
                    <option value={"/profile"} >
                        profile
                    </option>
                    <option value={"/logout"}>
                        logout
                    </option>
                </select>
            </div>
    )
}

export default Navbar
