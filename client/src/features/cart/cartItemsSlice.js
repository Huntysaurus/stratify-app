export function fetchCart(user) {
    return function (dispatch) {
        fetch(`/carts/${user.id}`)
        .then(r => r.json())
        .then((cart) => {
            dispatch({
                type: "cartItems/fetchCartItems",
                payload: cart
            })}
        )
    }
}

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

const initialState = [];

export default function cartItemsReducer(state = initialState, action) {
    switch (action.type) {
        case "cartItems/add":
            console.log(state)
            return [...state, action.payload];
        
        case "cartItems/remove":
            return state.filter((item) => item.id !== action.payload);

        case "cartItems/itemsLoading":
            console.log('loading cart items')

        case "cartItems/fetchCartItems":
            return state = action.payload

        default:
            return state;
    }
}