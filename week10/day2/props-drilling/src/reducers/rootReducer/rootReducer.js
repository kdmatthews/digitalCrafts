const initialState = {
    mustang: "1967 Mustang Boss 302",
    fordGt: "2021 Ford Gt",
    bugatti: "2021 Bugatti Chiron",
    kawasaki: "zrx1200",
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Compare that value to a list of criteria
        // those criteria are called cases
        case "GET_BUGATTI":
            return state.bugatti;
        case "GET_FORDGT":
            return state.fordGt;
        case "CHANGE_KAWASAKI":
            return {...state,kawasaki: "ninja 250"}
        case "GET_MUSTANGE":
            return state.mustang;
        default:
            return state
        
    }
};

export default rootReducer;



