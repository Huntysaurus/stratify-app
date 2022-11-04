import React, { useEffect, useState } from "react";
import Review from "./Review";

function Profile({ user }) {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch(`/user/${user.id}/reviews`)
        .then(r => r.json())
        .then(reviews => setReviews(reviews))
    }, [])

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <h2>{user.name}</h2>
                <p>username: {user.username}</p>
                <div>
                    <h2>Your orders</h2>
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