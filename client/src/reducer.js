import { combineReducers } from "redux";
import cartItemsReducer from "./features/cart/cartItemsSlice.js"
import productsReducer from "./features/product/productsSlice.js"

const rootReducer = combineReducers({
    cartItems: cartItemsReducer,
    products: productsReducer,
})

export default rootReducer;