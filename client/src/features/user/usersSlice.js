
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
                r.json().then((user) => {
                    dispatch({
                        type: "user/userLogin",
                        payload: user
                    })})
            } else {
                r.json().then((err) => console.log(err))
                alert('The username and/or password you have entered is incorrect. Please try again.')
            }
        })
    }
}

export function logoutUser() {
    return function (dispatch) {
        fetch('/logout', {method: "DELETE"}).then((r) => {
            if (r.ok) {
                dispatch({
                    type: "user/userLogout",
                    payload: null
                })
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
                dispatch({
                    type: "user/userLogin",
                    payload: user
                })})
            }
        })
    }
}

const initialState = null;

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
    
        case "user/userLogin":
            return state = action.payload

        case "user/userLogout":
            return state = null
        
        default:
            return state;
    }
}