import React, { useState } from "react";
import Login from "../user/Login";
import Signup from "../user/SignUp";
import styles from './home.module.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
    const navigate = useNavigate()
    const user = useSelector(state => state.user)

    const [formSwitch, setFormSwitch] = useState(false)

    return (
        <>
            <h1 className={styles.header_logged_out}>stratify</h1>
            <p className={styles.text_under_header}>shopping made simple!</p>
                { formSwitch ?
                    <div className={styles.form_holder} >
                        <Signup />
                        <div className={styles.subtext}>
                            <p onClick={()=>setFormSwitch(false)}>have an account? Click here to Login!</p>
                        </div>
                    </div>
                    :
                    <div className={styles.form_holder}>
                        <Login />
                        <div className={styles.subtext}>
                            <p onClick={()=>setFormSwitch(true)}>no account? Click here to sign up.</p>
                        </div>
                    </div>
                }
        </>
    )
}

export default Home