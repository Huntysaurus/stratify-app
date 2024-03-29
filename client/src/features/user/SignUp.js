import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "./usersSlice";
import { clearErrors } from "../errorsSlice"; 
import styles from './signup.module.css';
import { useNavigate } from "react-router-dom";


function Signup() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const errors = useSelector(state => state.errors)

    const newUser = {name, email, username, password, confirmPassword}

    useEffect(()=> {
        dispatch(clearErrors())
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(createUser(newUser))
    }

    return (
        <>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                <h1 className={styles.sub_header}>Sign Up</h1>
                <label>
                    enter name
                    <input
                    placeholder="2 to 15 characters long"
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </label>
                <label>
                    enter email
                    <input
                    placeholder="optional"
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </label>
                <div className={styles.username_holder}>
                    <label>
                        create username
                        <input
                        placeholder="6 to 15 characters long"
                        type="text"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div className={styles.password_backdrop}>
                    <label>
                        create password
                        <input
                        placeholder="make it unique!"
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </label>
                    <label>
                        confirm password
                        <input
                        placeholder="confirm password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        />
                    </label>
                </div>
                <br/>
                <button className={styles.button} type="submit">sign up</button>
                </form>
                <div className={styles.subtext}>
                    <p onClick={()=>navigate("/")}>Already have an account? Click here to return to Login screen.</p>
                </div>
            </div>
            <div className={styles.error_messages}>
                {errors?.map(error => {
                    return <p>{error}</p>
                })}
            </div>
        </>
    )
}

export default Signup