// reducers, they contain your default state
const initialState = {
    userName: "",
    userEmail: "",
    userAddress: "",
    restaurants: "",
    userData: "",
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_USERNAME":
            return {...state,userName: action.payload};
        case "SET_USEREMAIL":
            return {...state,userEmail:"kayla@aol.com"};
        case "SET_USERADDRESS":
            return {...state,userAddress:"212 my Street"};
        case "SET_RESTAURANTS":
            return {...state,restaurants: action.payload};
        case "GET_USERDATA":
            return {...state,userData: action.payload};
        case "GET_DATA":
            return state.userData;
        default:
            return state;
    }
};