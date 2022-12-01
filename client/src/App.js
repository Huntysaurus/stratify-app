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
import { userSession } from "./features/user/usersSlice";
 
function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [cartProducts, setCartProducts] = useState([])
  const access = useSelector(state => state.access)
  const currentUser = useSelector(state => state.user)
  const productDetail = useSelector(state => state.productDetail)

  useEffect(()=> {
    dispatch(userSession())
  }, [dispatch])

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

  return (
    <div className={styles.homeContainer}>
      {currentUser ?
      <div>
        <h1 className={styles.corner_logo} onClick={()=>navigate('/shop')}>stratify</h1>
        <Navbar/>
        <ShoppingCart />
        <Routes>
          <Route exact path="/shop" element={ <Shop productIds={productIds} /> }/>
          <Route exact path="/product_detail" element={ <ProductDetail productIds={productIds} /> }/>
          <Route exact path="/profile" element={ <Profile />}/>
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
