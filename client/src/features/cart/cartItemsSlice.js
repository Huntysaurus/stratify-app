
const initialState = [];

export const addCartItem = (cartItem) => {
    return {
        type: "cartItems/add",
        payload: cartItem,
    }
}

export const removeCartItem = (id) => {
    return {
        type: "cartItems/remove",
        payload: id,
    }
}

export function fetchCartItems() {
    return function (dispatch) {
        dispatch({ type: "cartItems/itemsLoading"})

        // unfinished, start with usersSlice
    }
}

export default function cartItemsReducer(state = initialState, action) {
    switch (action.payload) {
        case "cartItems/add":
            console.log(state)
            return [...state, action.payload];
        
        case "cartItems/remove":
            return state.filter((item) => item.id !== action.payload);

        case "cartItems/itemsLoading":
            console.log('loading cart items')

        default:
            return state;
    }
}