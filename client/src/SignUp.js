import React, { useState } from "react";

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState("")

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
                r.json().then((user) => console.log(user))
            } else {
                r.json().then((err) => console.log(err.errors))
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <label>
                enter name
                <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </label>
            <label>
                enter email
                <input
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </label>
            <label>
                create username
                <input
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
            </label>
            <label>
                create password
                <input
                type="text"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </label>
            <label>
                confirm password
                <input
                type="text"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                />
            </label>
            <button type="submit">sign up</button>
            </form>
        </div>
    )
}

export default Signup