import React, { useState } from "react";

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
        <div>
            <h1>login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    username
                    <input
                        placeholder='username'
                        type="text"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </label>
                <label>
                    password
                    <input
                        placeholder='password'
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login