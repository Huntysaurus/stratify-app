export const setProductDetail = (product) => {
    return {
        type: "productDetail/set",
        payload: product,
    }
}

const initialState = [];

export default function productDetailReducer(state = initialState, action) {
    switch (action.type) {
        case "productDetail/set":
            return state = action.payload

        default:
            return state
    }
}