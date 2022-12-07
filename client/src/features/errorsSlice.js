export const setErrors = (errors) => {
    return {
        type: "errors/setErrors",
        payload: errors,
    }
}

export const clearErrors = () => {
    return {
        type: "errors/clearErrors",
        payload: []
    }
}

const initialState = [];

export default function errorsReducer(state = initialState, action) {
    switch (action.type) {
        case "errors/setErrors":
            return state = action.payload

        case "errors/clearErrors":
            return state = []

        default:
            return state;
    }
}