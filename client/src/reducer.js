import { combineReducers } from "redux";
import cartItemsReducer from "./features/cart/cartItemsSlice.js"
import productsReducer from "./features/product/productsSlice.js"
import usersReducer from "./features/user/usersSlice.js"
import errorsReducer from "./features/errorsSlice.js"
import accessReducer from "./features/user/accessSlice"
import productDetailReducer from "./features/product/productDetailSlice.js";
import reviewsReducer from "./features/review/reviewsSlice.js";
import ordersReducer from "./features/order/ordersSlice.js";

const rootReducer = combineReducers({
    cartItems: cartItemsReducer,
    products: productsReducer,
    user: usersReducer,
    errors: errorsReducer,
    access: accessReducer,
    productDetail: productDetailReducer,
    reviews: reviewsReducer,
    orders: ordersReducer
})

export default rootReducer;