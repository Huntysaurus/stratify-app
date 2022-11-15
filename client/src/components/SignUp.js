import React, { useState } from "react";
import styles from '../appStyles.module.css';

function Signup({ onSignup }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState("")

    console.log(errors)

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                username,
                email,
                password,
                password_confirmation: confirmPassword
            }),
        }).then((r)=> {
            if (r.ok) {
                r.json().then((user) => onSignup(user))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
            <h1 className={styles.sub_header}>Sign Up</h1>
            <label>
                <i>enter name</i>
                <input
                placeholder="is 2 to 15 characters long"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </label>
            <br/>
            <label>
                <i>enter email</i>
                <input
                placeholder="is optional"
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </label>
            <br/>
            <label>
                <i>create username</i>
                <input
                placeholder="is 6 to 15 characters long"
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
            </label>
            <br/>
            <label>
                <i>create password</i>
                <input
                placeholder="is 6 to 15 characters long"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </label>
            <br/>
            <label>
                <i>confirm password</i>
                <input
                placeholder="confirm password"
                type="password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                />
            </label>
            <br/>
            <button className={styles.login_button} type="submit">sign up</button>
            </form>
        </div>
    )
}

export default Signup