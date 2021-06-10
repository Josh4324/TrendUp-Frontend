
const loginReducerDefaultState = {
    user: JSON.parse(localStorage.getItem("trend-user")) || null,
}

const loginReducer = (state = loginReducerDefaultState, action) => {
    switch (action.type){
        case 'LOGIN_START':
            return {
                user: null,
            }
        case 'LOGIN_FAILURE':
            return {
                user: null,
            }
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
            }
        default:
            return state;
    }
}

export default loginReducer;