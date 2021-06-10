const userReducerDefaultState = {
    user: null,
}

const userReducer = (state = userReducerDefaultState, action) => {
    switch (action.type){
        case 'GET_USER':
            return {
                user: action.payload,
            }
        default:
            return state;
    }
}

export default userReducer;