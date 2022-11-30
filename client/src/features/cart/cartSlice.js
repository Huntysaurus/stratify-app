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
                
            } else {
                r.json().then((err) => console.log(err))
            }
          })
    }
}

export function removeFromCart(product) {
    return function (dispatch) {
        debugger
        dispatch({
            type: "cart/removeItem",
            payload: product.id
        })
        fetch(`/cart_items/${product.id}`, {
            method: "DELETE",
        })
    }
}

const initialState = [];

export default function cartReducer(state = initialState, action) {
    switch (action.type) {

        case "cart/addItem":
            console.log(state)
            return state.cart_items = [...state.cart_items, action.payload]
        
        case "cart/removeItem":
            const newItems = state.cart_items.filter((item) => item.id !== action.payload.id);
            return state.cart_items = newItems;

        case "cart/itemsLoading":
            console.log('loading cart items')

        case "cart/fetchCartItems":
            return state = action.payload

        default:
            return state;
    }
}