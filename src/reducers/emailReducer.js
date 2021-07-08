const emailReducerDefaultState = {
    email: "",
}

const emailReducer = (state = emailReducerDefaultState, action) => {
    console.log(action);
    switch (action.type){
        case 'SEND_EMAIL':
            return {
                email: action.payload,
            }
        default:
            return state;
    }
}


export default emailReducer;