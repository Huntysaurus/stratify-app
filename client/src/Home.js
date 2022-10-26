import React from "react";
import Login from "./Login";
import Signup from "./SignUp";

function Home({ onSignup }) {
    return (
        <>
            <h1>Home</h1>
            <Signup onSignup={ onSignup }/>
            <Login />
        </>
    )
}

export default Home