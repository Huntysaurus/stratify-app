export const allowAccess = () => {
    return {
        type: "access/allow"
    }
}

export const denyAccess = () => {
    return {
        type: "access/deny"
    }
}

const initialState = null;

export default function cartItemsReducer(state = initialState, action) {
    switch (action.type) {
        case "access/allow":
            return state = [true]
        
        case "access/deny":
            return state = null

        default:
            return state;
    }
}