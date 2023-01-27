import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../user/usersSlice";
import styles from './navbar.module.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    function handleLogout() {
        dispatch(logoutUser())
        navigate('/')
    }

    function handleNavigation(e) {
        setIsOpen(false)
        if (e === "/logout") {
            handleLogout();
        } else if (e === "") {
            return
        } else {
            navigate(e)
        }
    }

    return (
            isOpen ? (
                <>
                    <button className={styles.menu_icon} onClick={()=> setIsOpen(!isOpen)}>menu</button>

                    <div className={styles.navbar}>
                    <ul>
                        <li className={styles.list_option}
                            value="/shop"
                            onClick={(e)=>handleNavigation("/shop")}>
                            shop
                        </li>
                        <li className={styles.list_option}
                            value="/profile"
                            onClick={(e)=>handleNavigation("/profile")}>
                            profile
                        </li>
                        <li className={styles.list_option}
                            value="/logout"
                            onClick={(e)=>handleNavigation("/logout")}>
                            logout
                        </li>
                    </ul>
                </div>
                </>
            )
            :
            <button className={styles.menu_icon} onClick={()=> setIsOpen(!isOpen)}>menu</button>
    )
}

export default Navbar
