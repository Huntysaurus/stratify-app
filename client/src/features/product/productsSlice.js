export function fetchProducts() {
    return function (dispatch) {
        dispatch({ type: "products/productsLoading"});
        fetch('/products')
        .then((r)=> {
            if (r.ok) {
                r.json().then((products) => 
                    dispatch({
                        type:"products/productsLoaded",
                        payload: products
                    }))
            } else {
                r.json().then(err => console.log(err.errors))
            }
        })
    }

}

export function searchProducts(searchItem) {
    return function (dispatch) {
        dispatch({ type: "products/productsLoading"});
        fetch(`/search/${searchItem}`)
        .then((r)=> {
            if (r.ok) {
                r.json().then((result) => {
                    dispatch({
                        type:"products/productsLoaded",
                        payload: result
                    })})
            } else {
                r.json().then(dispatch(fetchProducts()))
            }
        })
    }
}

export function filterProducts(vendorId) {
    return function (dispatch) {
        dispatch({ type: "products/productsLoading"});
        fetch(`/filter/${vendorId}`)
        .then((r)=> {
            if (r.ok) {
                r.json().then((result) => 
                    dispatch({
                        type:"products/productsLoaded",
                        payload: result
                    }))
            } else {
                r.json().then(dispatch(fetchProducts()))
            }
        })
    }
}

const initialState = [];

export default function productsReducer(state = initialState, action) {
    switch (action.type) {

        case "products/productsLoaded":
            const newProducts = action.payload?.filter(product => product.cart_items.length === 0)
            return {
                ...state,
                status: "idle",
                entities: newProducts,
            }

        case "products/productsLoading":
            return {
                ...state,
                status: "loading"
            }

        default:
            return state
    }
}