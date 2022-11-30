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