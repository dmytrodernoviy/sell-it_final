const initialState = {
    isLogin: false
}

export default function Authorized(state = initialState, action) {
    switch(action.type) {
        case "LOGIN_IN":
            return {...state, isLogin: true}
        case "LOGIN_OUT": 
            return {...state, isLogin: false}
        default:
            return state
    } 
}