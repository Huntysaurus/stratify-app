import { setErrors } from "../errorsSlice"
import { allowAccess, denyAccess } from "./accessSlice"

export function createUser(userObj) {
    console.log(userObj)
    return function (dispatch) {
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: userObj.name,
                username: userObj.username,
                email: userObj.email,
                password: userObj.password,
                password_confirmation: userObj.confirmPassword
            }),
        }).then((r)=> {
            if (r.ok) {
                r.json().then((user) => {
                    dispatch(allowAccess())
                    dispatch({
                        type: "user/userCreate",
                        payload: user
                    })
                })
            } else {
                r.json().then((err) => dispatch(setErrors(err.errors)))
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

export function loginUser(userObj) {
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
                    dispatch(allowAccess())
                    dispatch({
                        type: "user/userLogin",
                        payload: user
                    })})
            } else {
                r.json().then((err) => dispatch(setErrors(err)))
                alert('The username and/or password you have entered is incorrect. Please try again.')
            }
        })
    }
}

export function logoutUser() {
    return function (dispatch) {
        fetch('/logout', {method: "DELETE"}).then((r) => {
            if (r.ok) {
                dispatch(denyAccess())
                dispatch({
                    type: "user/userLogout",
                    payload: null
                })
            }
        })
    }
}

export function updateUsername(user, username) {
    return function (dispatch) {
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
                body: JSON.stringify({
                username: username
                }),
        }).then((r)=> {
            if (r.ok) {
                r.json().then(user => {
                    dispatch({
                        type: "user/userEdit",
                        payload: user
                    })})
            } else {
                r.json().then((err) => console.log(err))

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

        case "user/userCreate":
            return state = action.payload

        case "user/userEdit":
            return {
                ...state,
                entities: action.payload
            }
        
        default:
            return state;
    }
}