export function fetchOrders(user) {
    return function (dispatch) {
        dispatch({ type: "orders/ordersLoading"});
        fetch(`/users/${user.id}/orders`)
        .then((r)=> {
            if (r.ok) {
                r.json().then((orders) => {
                    dispatch({
                        type:"orders/ordersLoaded",
                        payload: orders
                    })})
            } else {
                r.json().then(err => console.log(err.errors))
            }
        })
    }

}

export function createOrder(currentUser, total) {
    return function (dispatch) {
        fetch("/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                total: total,
            }),
        }).then((r)=> {
            if (r.ok) {
                r.json().then((order) => {
                    dispatch({
                        type: "orders/create",
                        payload: order
                    })
                })
                alert('Thanks for your purchase. An order has been created!')
                window.location.reload()
            } else {
                r.json().then((err) => console.log(err.errors))
            }
        })
    }
}

const initialState = [];

export default function ordersReducer(state = initialState, action) {
    switch (action.type) {
        case "orders/ordersLoaded":
            return {
                ...state,
                status: "idle",
                entities: action.payload,
            }

        case "orders/ordersLoading":
            return {
                ...state,
                status: "loading"
            }

        default:
            return state
    }
}