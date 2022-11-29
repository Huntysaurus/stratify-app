import React, { useState } from "react";
import styles from './login.module.css';
import { loginUser } from './usersSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(loginUser({username, password}))
        navigate("/shop")
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