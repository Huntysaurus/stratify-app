import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Review from "./Review";

function Profile({ user, onEditUser }) {
    const navigate = useNavigate()
    const [reviews, setReviews] = useState([])
    const [userForm, setUserForm] = useState(null)
    const [passwordForm, setPasswordForm] = useState(null)
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [username, setUsername] = useState("")
    const [errors, setErrors] = useState("")

    useEffect(()=>{
        fetch(`/user/${user.id}/reviews`)
        .then(r => r.json())
        .then(reviews => setReviews(reviews))
    }, [user.id])

    function onPasswordChangeClick(){
        setPasswordForm(true)
    }

    function handleErrors(err) {
        setErrors(err.errors)
        console.log(errors)
        alert(errors)
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
        <div>
            <button onClick={()=>navigate('/shop')}>Shop</button>
            <h1>Profile</h1>
            <div>
                <h2>{user.name}</h2>
                <p>username: {user.username}</p>

                {/* password form */}
            <div>
                {
                    passwordForm ?
                    <form onSubmit={handlePasswordChange}>
                        <button onClick={()=>setPasswordForm(null)}>cancel</button>
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
                        <button type='submit'>submit</button>
                    </form>
                    :
                    <button onClick={onPasswordChangeClick}>change password</button>
                }
            </div>
            </div>

            {/* username form */}
            <div>
                {
                    userForm ?
                    <form onSubmit={handleUpdateUsername}>
                        <button onClick={()=>setUserForm(null)}>cancel</button>
                        <label>
                            {'New Username:'}
                            <input
                                placeholder={user.username}
                                type="text"
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                            />
                        </label>
                        <button type="submit" >submit</button>
                    </form>
                    :
                    <button onClick={()=>setUserForm(true)}>change username</button>
                }
            </div>

            <div>
                <div>
                    <h2>Your orders</h2>
                    <p>future order invoices go here</p>
                </div>
                <div>
                    <h2>Your reviews</h2>
                    {reviews.map((review) => <Review review={review}/>)}
                </div>
            </div>

        </div>
    )
}

export default Profile