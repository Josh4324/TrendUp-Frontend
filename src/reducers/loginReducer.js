const loginReducerDefaultState = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
}

const loginReducer = (state = loginReducerDefaultState, action) => {
    switch (action.type){
        case 'LOGIN_START':
            return {
                user: null,
                isFetching: true,
                error: false
            }
        case 'LOGIN_FAILURE':
            return {
                user: null,
                isFetching: false,
                error: true
            }
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isFetching: false,
                error: true
            }
        default:
            return state;
    }
}

export default loginReducer;