import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from '../appStyles.module.css';
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Shop from "./Shop";
import Profile from "./Profile";
import ShoppingCart from "./ShoppingCart";
import Navbar from "./Navbar"
 
function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [product, setProduct] = useState([])
  const [cartProducts, setCartProducts] = useState([])

  let productIds = []

    cartProducts?.forEach(product => 
        productIds = [...productIds, product.id]
    )

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
    setProduct(product)
    navigate("/product_detail")
  }

  function handleEditUser(updated) {
    console.log(user)
    setUser(updated)
    alert(`Updated successfully!`)
    window.location.reload()
  }

  function handleAddToCart(product) {
    fetch(`/cart_items`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          cart_id: user.cart.id,
          product_id: product.id
      })
    }).then((r) => {
      if (r.ok) {
          r.json().then(cartItem => handleCreatedCartItem(cartItem))
          
      } else {
          r.json().then((err) => console.log(err))
      }
    })
  }

  function handleCreatedCartItem(cartItem) {
    console.log(cartItem)
    setCartProducts([...cartProducts, cartItem.product ])
  }

  function handleRemoveFromCart(product) {
      console.log(product)
      const newProducts = cartProducts.filter(item => item.id !== product.id)
      console.log(newProducts)
      setCartProducts(newProducts)
      fetch(`/cart_items/${product.id}`, {
        method: "DELETE",
    })
  }

  function handleAfterCheckout() {
    setCartProducts([])
    alert('Thanks for your purchase. An order has been created!')
    window.location.reload()
  }

  return (
    <div className={styles.homeContainer}>
      {user ?
      <div>
        <h1 className={styles.corner_logo} onClick={()=>navigate('/shop')}>stratify</h1>
        <Navbar onLogoutClick={handleLogout}/>
        <ShoppingCart onRemoveClick={handleRemoveFromCart} user={user} cartProducts={cartProducts} afterCheckout={()=>handleAfterCheckout()}/>
        <Routes>
          <Route exact path="/cart" element={ <ShoppingCart onRemoveClick={handleRemoveFromCart} cartProducts={cartProducts}/> }/>
          <Route exact path="/shop" element={ <Shop cartProducts={cartProducts} productIds={productIds} onProductClick={handleProductNavigation} onShopAdd={handleAddToCart} onShopRemove={handleRemoveFromCart}/> }/>
          <Route exact path="/product_detail" element={ <ProductDetail onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} onCartItemCreated={handleCreatedCartItem} user={user} product={product} productIds={productIds} /> }/>
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
