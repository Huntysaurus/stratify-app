
export function loginUser(userObj) {
    console.log(userObj)
    return function (dispatch) {
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userObj }),
        }).then((r)=> {
            if (r.ok) {
                r.json().then((user) =>
                    dispatch({
                        type: "user/userLogin",
                        payload: user
                    }))
            } else {
                r.json().then((err) => console.log(err))
                alert('The username and/or password you have entered is incorrect. Please try again.')
            }
        })
    }
}

export function userSession() {
    return function (dispatch) {
        fetch('/me')
        .then((r) => {
            if (r.ok) {
            r.json().then((user) => {
                console.log(user)
                dispatch({
                    type: "user/userLogin",
                    payload: user
                })})
            }
        })
    }
}

const initialState = [];

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
    
        case "user/userLogin":
            debugger
            state = [...state, action.payload]
        
        default:
            return state;
    }
}