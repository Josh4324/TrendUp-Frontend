const userReducerDefaultState = {
    user: null,
    isFetching: false,
    error: false,
}

const userReducer = (state = userReducerDefaultState, action) => {
    switch (action.type){
        case 'GET_USER':
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        default:
            return state;
    }
}

export default userReducer;