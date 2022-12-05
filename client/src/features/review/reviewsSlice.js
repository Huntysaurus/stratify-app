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

export function createReview(currentUser, productDetail, description, rating) {
    return function (dispatch) {
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                description: description,
                stars: rating,
                user_id: currentUser.id,
                product_id: productDetail.id
            })
        }).then((r) => {
            if (r.ok) {
                r.json().then(review => {
                    console.log(review)
                    dispatch({
                        type: "reviews/create",
                        payload: review
                    })
                })
                dispatch(fetchProductReviews(productDetail))
                alert("Review posted!")
            } else {
                r.json().then((err) => console.log(err))
                alert("Review must be between 5 - 100 characters.")
            }
        })
    }
}

export function deleteProductReview(review, productDetail) {
    return function (dispatch) {
        const response = window.confirm('Are you sure you want delete your review?')
        if (response) {
            dispatch({
                type:"reviews/delete",
                payload: review.id
            })
            fetch(`reviews/${review.id}`, {
                method: "DELETE"
            }).then(()=> {
                dispatch(fetchProductReviews(productDetail))
                alert("review deleted.")
            })     
        } else {
            return
        }
    }
}

export function deleteUserReview(review, productDetail) {
    return function (dispatch) {
        const response = window.confirm('Are you sure you want delete your review?')
        if (response) {
            dispatch({
                type:"reviews/delete",
                payload: review.id
            })
            fetch(`reviews/${review.id}`, {
                method: "DELETE"
            }).then(()=> {
                dispatch(fetchUserReviews(productDetail))
                alert("review deleted.")
            })     
        } else {
            return
        }
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
            state.entities = []
            return {
                ...state,
                status: "loading"
            }

        case "reviews/create":
            return state.entities = [...state.entities, action.payload]

        case "review/delete":
            const newItems = state.entities.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                status: "idle",
                entities: newItems
            }

        default:
            return state
    }
}