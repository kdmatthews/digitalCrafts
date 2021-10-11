const initialState = [];

const NewsArticles = (state=initialState, action) =>{
    switch(action.type){
        case "FILL_INFO":
            const originalState = state;
            const newState = [...originalState, {name: "new article"}];
            return newState
        case "RESET":
            return []
        default:
            return state
    }
}

export default NewsArticles;