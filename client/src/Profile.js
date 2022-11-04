import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Review from "./Review";

function Profile({ user, onEditUsername }) {
    const navigate = useNavigate()
    const [reviews, setReviews] = useState([])
    const [userForm, setUserForm] = useState(null)
    const [passwordForm, setPasswordForm] = useState(null)
    const [username, setUsername] = useState("")
    const [errors, setErrors] = useState("")

    useEffect(()=>{
        fetch(`/user/${user.id}/reviews`)
        .then(r => r.json())
        .then(reviews => setReviews(reviews))
    }, [])

    function onPasswordChangeClick(){
        setPasswordForm(true)
    }

    function handleErrors(err) {
        setErrors(err.errors)
        console.log(errors)
        alert(errors)
    }

    // need to add the password change form as well

    function handleUsernameSubmit(e) {
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
                r.json().then(user => onEditUsername(user))
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
            <div>
                {
                    passwordForm ?
                    <form>
                        <button onClick={()=>setPasswordForm(null)}>cancel</button>
                    <p>password form</p>

                    </form>
                    :
                    <button onClick={onPasswordChangeClick}>change password</button>
                }
            </div>
            </div>
            <div>
                {
                    userForm ?
                    <form onSubmit={handleUsernameSubmit}>
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