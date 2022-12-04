import { combineReducers } from "redux";
import cartReducer from "./features/cart/cartSlice.js"
import productsReducer from "./features/product/productsSlice.js"
import usersReducer from "./features/user/usersSlice.js"
import errorsReducer from "./features/errorsSlice.js"
import accessReducer from "./features/user/accessSlice"
import productDetailReducer from "./features/product/productDetailSlice.js";
import reviewsReducer from "./features/review/reviewsSlice.js";
import ordersReducer from "./features/order/ordersSlice.js";
import vendorsReducer from "./features/search/vendorsSlice.js";

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    user: usersReducer,
    errors: errorsReducer,
    access: accessReducer,
    productDetail: productDetailReducer,
    reviews: reviewsReducer,
    orders: ordersReducer,
    vendors:  vendorsReducer
})

export default rootReducer;