import React, { useEffect, useState } from "react";
import Review from "./Review";

function Profile({ user }) {
    const [reviews, setReviews] = useState([])
    const [userForm, setUserForm] = useState(null)
    const [passwordForm, setPasswordForm] = useState(null)

    useEffect(()=>{
        fetch(`/user/${user.id}/reviews`)
        .then(r => r.json())
        .then(reviews => setReviews(reviews))
    }, [])

    function onPasswordChangeClick(){
        setPasswordForm(true)
    }

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <h2>{user.name}</h2>
                <p>username: {user.username}</p>
            <div>
                {
                    passwordForm ?
                    <form>
                        <button onClick={()=>setPasswordForm(null)}>cancel</button>
                        <p>the form</p>
                    </form>
                    :
                    <button onClick={onPasswordChangeClick}>change password</button>
                }
            </div>
            </div>
            <div>
                {
                    userForm ?
                    <form>
                        <button onClick={()=>setUserForm(null)}>cancel</button>
                        <p>the form</p>
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