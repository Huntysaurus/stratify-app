import React, { useState } from "react"
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
 
function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  function handleLogin(user) {
    setUser(user)
  }

  return (
    <div>
      <h1>the app banner</h1>
      {user ?
        <Shop/>
        :
        <Home onSignup={handleLogin}/>
      }
    </div>
  );
}

export default App;
