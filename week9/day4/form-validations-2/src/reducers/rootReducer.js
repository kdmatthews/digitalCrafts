// reducers, they contain your default state
const initialState = {
    userName: "",
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_USERNAME":
            return {...state,username: "Bob"};
        default:
            return state;
    }
};