import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Shop from "./Shop";
import Profile from "./Profile";
import ShoppingCart from "./ShoppingCart";
 
function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [product, setProduct] = useState(null)
  const [cart, setCart] = useState(null)

  console.log(cart)

  function onFetchUser(user) {
    setUser(user)
    setCart(user.cart)
  }

  useEffect(()=> {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => onFetchUser(user))
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

  function handleProductNavigation(user) {
    setProduct(user)
    navigate("/product_detail")
  }

  function handleEditUser(updated) {
    setUser(updated)
    alert('updated successfully!')
    window.location.reload()
  }

  return (
    <div>
      <h1>the app banner</h1>
      {user ?
        <Routes>
          <Route exact path="/cart" element={ <ShoppingCart />}/>
          <Route exact path="/shop" element={ <Shop onProductClick={handleProductNavigation} onLogoutClick={handleLogout} /> }/>
          <Route exact path="/product_detail" element={ <ProductDetail user={user} product={product}/> }/>
          <Route exact path="/profile" element={ <Profile onEditUser={handleEditUser} user={user} />}/>
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
