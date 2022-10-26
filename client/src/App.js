import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
 
function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  console.log(user)

  useEffect(()=> {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  },[])

  function handleLogin(user) {
    setUser(user)
    navigate('/shop')
  }

  return (
    <div>
      <h1>the app banner</h1>
      {user ?
        <Routes>
          <Route exact path="/shop" element={ <Shop/> }/>
        </Routes>
        :
        <Routes>
          <Route exact path="/" element={ <Home onSignup={handleLogin}/> }/>
        </Routes>
      }
    </div>
  );
}

export default App;
