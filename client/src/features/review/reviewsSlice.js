export function fetchUserReviews(user) {
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

export function fetchProductReviews(product) {
    return function (dispatch) {
        dispatch({ type: "reviews/reviewsLoading"});
        fetch(`/products/${product.id}/reviews`)
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

export function createReview(currentUser, productDetail, description) {
    return function (dispatch) {
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                description: description,
                stars: 1,
                user_id: currentUser.id,
                product_id: productDetail.id
            })
        }).then((r) => {
            if (r.ok) {
                r.json().then(review => {
                    dispatch({
                        type: "reviews/create",
                        payload: review
                    })
                })
                dispatch(fetchProductReviews(productDetail))
            } else {
                r.json().then((err) => console.log(err))
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

        case "reviews/create":
            return state.entities = [...state.entities, action.payload]

        default:
            return state
    }
}