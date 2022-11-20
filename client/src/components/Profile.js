import React, { useEffect, useState } from "react";
import Review from "./Review";
import styles from '../appStyles.module.css';

function Profile({ user, onEditUser }) {
    const [reviews, setReviews] = useState([])
    const [userForm, setUserForm] = useState(null)
    const [passwordForm, setPasswordForm] = useState(null)
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [username, setUsername] = useState("")

    console.log(user)

    useEffect(()=>{
        fetch(`/user/${user.id}/reviews`)
        .then(r => r.json())
        .then(reviews => setReviews(reviews))
    }, [user.id])

    function onPasswordChangeClick(){
        setPasswordForm(true)
    }

    function handleErrors(err) {
        console.log(err)
        alert('passwords must match')
    }

    function handlePasswordChange(e) {
        e.preventDefault()
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: password,
                password_confirmation: passwordConfirmation
            }),
        }).then((r)=> {
            if (r.ok) {
                r.json().then(user => onEditUser(user))
            } else {
                r.json().then((err) => handleErrors(err))

            }
        })
    }

    function handleUpdateUsername(e) {
        e.preventDefault()
        console.log(username)
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username
            }),
        }).then((r)=> {
            if (r.ok) {
                r.json().then(user => onEditUser(user))
            } else {
                r.json().then((err) => handleErrors(err))

            }
        })
    }

    return (
        <div className={styles.profile_page}>
            <div className={styles.profile_holder}>
            <h1 className={styles.profile_header}>Profile</h1>
            <div className={styles.profile_info_backing}>
                <div className={styles.profile_info}>
                    <h2>name: {user.name}</h2>
                    <p>username: {user.username}</p>
                </div>
                <div className={styles.profile_forms_holder}>
                    <div>
                        {
                        passwordForm ?
                        <div className={styles.prof_change_form}>
                            <form onSubmit={handlePasswordChange}>
                            <button className={styles.button} onClick={()=>setPasswordForm(null)}>cancel</button>
                            <label>
                                {'enter new password'}
                            <input
                                    placeholder='new password'
                                    type="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </label>
                            <label>
                                {'re-enter password'}
                            <input
                                    placeholder='re-enter new password'
                                    type="password"
                                    value={passwordConfirmation}
                                    onChange={(e)=>setPasswordConfirmation(e.target.value)}
                                />
                            </label>
                            <button className={styles.button} type='submit'>submit</button>
                            </form>
                        </div>
                        :
                        <button className={styles.button} onClick={onPasswordChangeClick}>change password</button>
                        }
                    </div>
                    <div>
                        {
                        userForm ?
                        <div className={styles.prof_change_form}>
                            <form onSubmit={handleUpdateUsername}>
                                <button className={styles.button} onClick={()=>setUserForm(null)}>cancel</button>
                                <label>
                                    {'New Username'}
                                    <input
                                        placeholder={user.username}
                                        type="text"
                                        value={username}
                                        onChange={(e)=>setUsername(e.target.value)}
                                    />
                                </label>
                                <button className={styles.button} type="submit" >submit</button>
                            </form>
                        </div>
                        :
                        <button className={styles.button} onClick={()=>setUserForm(true)}>change username</button>
                    }
                    </div>
                </div>
            </div>

            <div>
                <h2 className={styles.orders_heading}>Your orders</h2>
                <div className={styles.orders_holder}>
                    <p>future order invoices go here</p>
                </div>
                <h2 className={styles.reviews_heading}>Your reviews</h2>
                <div className={styles.reviews_holder}>
                    {reviews?.map((review) => <Review key={review.id} review={review}/>)}
                </div>
            </div>

            </div>
        </div>
    )
}

export default Profile