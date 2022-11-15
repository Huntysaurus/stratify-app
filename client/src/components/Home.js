import React, { useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";
import styles from '../appStyles.module.css';

function Home({ onSignup }) {

    const [formSwitch, setFormSwitch] = useState(false)

    return (
        <>
            <h1 className={styles.header_logged_out}>stratify</h1>
            <p className={styles.text_under_header}>shopping made simple!</p>
                { formSwitch ?
                    <div className={styles.form_holder} >
                        <Signup onSignup={ onSignup }/>
                        <div className={styles.subtext}>
                            <p onClick={()=>setFormSwitch(false)}>have an account? Click here to Login!</p>
                        </div>
                    </div>
                    :
                    <div className={styles.form_holder}>
                        <Login onLogin={ onSignup }/>
                        <div className={styles.subtext}>
                            <p onClick={()=>setFormSwitch(true)}>no account? Click here to sign up.</p>
                        </div>
                    </div>
                }
        </>
    )
}

export default Home