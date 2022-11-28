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

export const productNavigate = (product) => {
    return {
        type: "products/navigate",
        payload: product,
    }
}

const initialState = [];

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case "products/productsLoaded":
            return {
                ...state,
                status: "idle",
                entities: action.payload,
            }

        case "products/productsLoading":
            return {
                ...state,
                status: "loading"
            }

        case "products/navigate":
            return [action.payload];

        default:
            return state
    }
}