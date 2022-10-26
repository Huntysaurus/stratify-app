import React, { useState } from "react"
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
 
function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  console.log(user)

  function handleLogin(user) {
    setUser(user)
  }

  return (
    <div>
      <h1>hello this is the app</h1>
      <Home onSignup={handleLogin}/>
      <Shop/>
    </div>
  );
}

export default App;
