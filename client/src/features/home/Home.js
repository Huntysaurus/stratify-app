import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../user/Login";
import styles from './home.module.css';

function Home() {
    const navigate = useNavigate()

    return (
        <>
            <h1 className={styles.header_logged_out}>stratify</h1>
            <p className={styles.text_under_header}>Strategic Shopping Made Simple!</p>
            <div className={styles.form_holder}>
                <Login />
                <div className={styles.subtext}>
                    <p onClick={()=>navigate("/signup")}>no account? Click here to sign up.</p>
                </div>
            </div>
        </>
    )
}

export default Home