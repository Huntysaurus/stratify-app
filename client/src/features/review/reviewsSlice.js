export function fetchReviews(user) {
    return function (dispatch) {
        dispatch({ type: "reviews/reviewsLoading"});
        fetch(`/users/${user.id}/reviews`)
        .then((r)=> {
            if (r.ok) {
                r.json().then((reviews) => {
                    dispatch({
                        type:"reviews/reviewsLoaded",
                        payload: reviews
                    })})
            } else {
                r.json().then(err => console.log(err.errors))
            }
        })
    }

}

const initialState = [];

export default function reviewsReducer(state = initialState, action) {
    switch (action.type) {
        case "reviews/reviewsLoaded":
            return {
                ...state,
                status: "idle",
                entities: action.payload,
            }

        case "reviews/reviewsLoading":
            return {
                ...state,
                status: "loading"
            }

        default:
            return state
    }
}