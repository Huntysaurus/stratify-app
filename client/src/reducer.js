import { combineReducers } from "redux";
import cartItemsReducer from "./features/cart/cartItemsSlice.js"
import productsReducer from "./features/product/productsSlice.js"
import usersReducer from "./features/user/usersSlice.js"

const rootReducer = combineReducers({
    cartItems: cartItemsReducer,
    products: productsReducer,
    user: usersReducer,
})

export default rootReducer;