import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <h1>login</h1>
            <form>
                <label>
                    username
                    <input
                        type="text"
                    />
                </label>
                <label>
                    password
                    <input
                        type="text"
                    />
                </label>
            </form>
        </div>
    )
}

export default Login