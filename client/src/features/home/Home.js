import React, { useEffect, useState } from "react";
import Login from "../user/Login";
import Signup from "../user/SignUp";
import styles from './home.module.css';

function Home() {

    const [formSwitch, setFormSwitch] = useState(false)

    return (
        <>
            <h1 className={styles.header_logged_out}>stratify</h1>
            <p className={styles.text_under_header}>Strategic Shopping Made Simple!</p>
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