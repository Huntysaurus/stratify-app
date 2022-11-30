import React, { useEffect, useState } from "react"
import { useNavigate, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from '../src/appStyles.module.css';
import Home from "./features/home/Home";
import ProductDetail from "./features/product/ProductDetail";
import Shop from "./features/shop/Shop";
import Profile from "./features/user/Profile";
import ShoppingCart from "./features/cart/ShoppingCart";
import Navbar from "./features/navbar/Navbar"
import { userSession, logoutUser } from "./features/user/usersSlice";
import { allowAccess } from "./features/user/accessSlice";
 
function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [product, setProduct] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const dispatch = useDispatch()

  const currentUser = useSelector(state => state.user)
  const errors = useSelector(state => state.errors)
  const access = useSelector(state => state.access)

  console.log(access)

  useEffect(()=> {
      if (access) {
          return navigate("/shop")
      }
          return navigate("/")
  },[access])

  let productIds = []

  cartProducts?.forEach(product => 
      productIds = [...productIds, product.id]
  )

  useEffect(()=> {
    dispatch(userSession())
  }, [dispatch])

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
      {currentUser ?
      <div>
        <h1 className={styles.corner_logo} onClick={()=>navigate('/shop')}>stratify</h1>
        <Navbar/>
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
          <Route exact path="/" element={ <Home /> }/>
        </Routes>
      }
    </div>
  );
}

export default App;
