export function fetchVendors() {
    return function (dispatch) {
        dispatch({ type:"vendors/vendorsLoading" })
        fetch('/vendors')
        .then(r => r.json())
        .then(vendors => {
            dispatch({
                type: 'vendors/vendorsLoaded',
                payload: vendors
            })
        })
    }
}

const initialState = []

export default function vendorsReducer(state = initialState, action) {
    switch(action.type) {
        
        case "vendors/vendorsLoading":
            return {
                ...state,
                status: "loading",
                entities: []
            }

        case "vendors/vendorsLoaded":
            return {
                ...state,
                status: "idle",
                entities: action.payload,
            }

        default:
            return state
    }
}

