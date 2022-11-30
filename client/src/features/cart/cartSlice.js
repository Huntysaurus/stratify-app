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
                    debugger
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

const initialState = [];

export default function cartReducer(state = initialState, action) {
    switch (action.type) {

        case "cart/addItem":
            console.log(state)
            return state.cartItems = [...state.cart_items, action.payload]
        
        case "cart/removeItem":
            return state.filter((item) => item.id !== action.payload);

        case "cart/itemsLoading":
            console.log('loading cart items')

        case "cart/fetchCartItems":
            return state = action.payload

        default:
            return state;
    }
}