export function fetchUser() {
    return function (dispatch) {
        dispatch({ type: "users/usersLoading"})

        // unfinished. start with products fetch

        fetch()
        .then(r => r.json())
        .then(user) =>
            dispatch({
                type: "users/userLoaded",
                payload: user
            })
    }
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {

        case "users/userLoaded":
            return {
                ...state,
                status: "idle",
                entities: action.payload,
            };

        case "users/userLoading":
            return {
                ...state,
                status: "loading",
            }
            console.log('loading user')

        default:
            return state;
    }
}