import { setErrors } from '../errorsSlice' 
import { fetchProducts } from '../product/productsSlice'

export function fetchCart(user) {
    return function (dispatch) {
        fetch(`/carts/${user.id}`)
        .then(r => r.json())
        .then((cart) => {
            dispatch({
                type: "cart/fetchCartItems",
                payload: cart
            })}
        )
    }
}

export function addToCart(user, product) {
    return function (dispatch) {
        dispatch({type:"cart/itemsLoading"})
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
                r.json().then(cartItem => {
                    dispatch({
                        type: "cart/addItem",
                        payload: cartItem
                    })})
                    dispatch(fetchCart(user))
                    dispatch(fetchProducts())
                
            } else {
                r.json().then((err) => {
                dispatch(setErrors(err))})
            }
          })
    }
}

export function removeFromCart(user, product) {
    return function (dispatch) {
        dispatch({type:"cart/itemsLoading"})
        dispatch({
            type: "cart/removeItem",
            payload: product.id
        })
        fetch(`/cart_items/${product.id}`, {
            method: "DELETE",
        }).then(()=> {
            dispatch(fetchCart(user))
            dispatch(fetchProducts())
        })
    }
}

export function clearCartItems(user) {
    return function (dispatch) {
        dispatch({type:"cart/clear"})
    }
}

const initialState = [];

export default function cartReducer(state = initialState, action) {
    switch (action.type) {

        case "cart/addItem":
            return {
                ...state,
                status: "idle",
                cart_items: [...state.cart_items, action.payload]
            }
        
        case "cart/removeItem":
            const newItems = state.cart_items.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                status: "idle",
                cart_items: newItems
            }

        case "cart/itemsLoading":
            return {
                ...state,
                status: "loading"
            }

        case "cart/fetchCartItems":
            return state = action.payload
        
        case "cart/clear":
            debugger
            return state = []

        default:
            return state;
    }
}