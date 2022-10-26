import React from "react";
import Login from "./Login";
import Signup from "./SignUp";

function Home({ onSignup }) {
    return (
        <>
            <h1>Home screen banner</h1>
            <Signup onSignup={ onSignup }/>
            <Login onLogin={ onSignup }/>
        </>
    )
}

export default Home