import { combineReducers } from "redux";
import cartItemsReducer from "./features/cart/cartItemsSlice.js"
import productsReducer from "./features/product/productsSlice.js"
import usersReducer from "./features/user/usersSlice.js"
import errorsReducer from "./features/errorsSlice.js"
import accessReducer from "./features/user/accessSlice"

const rootReducer = combineReducers({
    cartItems: cartItemsReducer,
    products: productsReducer,
    user: usersReducer,
    errors: errorsReducer,
    access: accessReducer
})

export default rootReducer;