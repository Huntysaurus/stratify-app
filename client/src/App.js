import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Shop from "./Shop";
 
function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [product, setProduct] = useState(null)

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

  function handleLogout() {
    fetch('/logout', {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setUser(null)
      }
      navigate('/')
    })
  }

  function handleProductNavigation(product) {
    setProduct(product)
    navigate("/product_detail")
  }

  return (
    <div>
      <h1>the app banner</h1>
      {user ?
        <Routes>
          <Route exact path="/shop" element={ <Shop onProductClick={handleProductNavigation} onLogoutClick={handleLogout} /> }/>
          <Route exact path="/product_detail" element={ <ProductDetail product={product}/> }/>
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
