import React from "react";
import Login from "./Login";
import Signup from "./SignUp";

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Signup/>
            <Login />
        </>
    )
}

export default Home