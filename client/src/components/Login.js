import React, { useState } from "react";
import styles from '../appStyles.module.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r)=> {
            if (r.ok) {
                r.json().then((user) => onLogin(user))
            } else {
                r.json().then((err) => console.log(err.errors))
                alert('The username and/or password you have entered is incorrect. Please try again.')
            }
        })
    }

    return (
        <div className={styles.form}>
            <h1 className={styles.sub_header}>login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        placeholder='username'
                        type="text"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    <input
                        placeholder='password'
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </label>
                <br/>
                <button className={styles.button} type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login