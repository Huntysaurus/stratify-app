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
  const [product, setProduct] = useState([])
  const [cartProducts, setCartProducts] = useState([])

  function onFetchCart(cart) {
    setCartProducts(cart.products)
  }
  
  
  function onFetchUser(user) {
    setUser(user)
    fetch(`/carts/${user.id}`)
    .then(r => r.json())
    .then(cart => onFetchCart(cart))
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
    setCartProducts(user.cart.products)
    navigate('/shop')
    window.location.reload()
  }

  function handleLogout() {
    fetch('/logout', {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setUser(null)
        setCartProducts([])
      }
      navigate('/')
    })
  }

  function handleProductNavigation(product) {
    console.log(product)
    setProduct(product)
    navigate("/product_detail")
  }

  function handleEditUser(updated) {
    setUser(updated)
    alert('updated successfully!')
    window.location.reload()
  }

  function handleCreatedCartItem(cartItem) {
    console.log(cartItem)
    setCartProducts([...cartProducts, cartItem.product ])
    console.log(cartProducts)
  }

  function handleRemoveFromCart(product) {
      fetch(`/cart_items/${product.id}`, {
        method: "DELETE",
    })
    const newProducts = cartProducts.filter(item => item.id =! product.id)
    console.log(product)
    setCartProducts(newProducts)
}

  return (
    <div>
      <h1>the app banner</h1>
      {user ?
      <div>
        <ShoppingCart onRemoveClick={handleRemoveFromCart} cartProducts={cartProducts}/>
        <Routes>
          <Route exact path="/shop" element={ <Shop onProductClick={handleProductNavigation} onLogoutClick={handleLogout} /> }/>
          <Route exact path="/product_detail" element={ <ProductDetail onCartItemCreated={handleCreatedCartItem} user={user} product={product} cartProducts={cartProducts} /> }/>
          <Route exact path="/profile" element={ <Profile onEditUser={handleEditUser} user={user} />}/>
        </Routes>
      </div>
        :
        <Routes>
          <Route exact path="/" element={ <Home onSignup={handleLogin}/> }/>
        </Routes>
      }
    </div>
  );
}

export default App;
