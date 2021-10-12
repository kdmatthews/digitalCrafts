const initialState = {
   
}

const LoginInfo = (state=initialState, action) => {
    switch(action.type){
        case "GET_USER":
            return{...state, loginUser:action.payload}
        default:
            return state
    }
}

export default LoginInfo;