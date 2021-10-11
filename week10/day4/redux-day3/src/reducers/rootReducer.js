import { combineReducers } from "redux";
import signUpFormData from "./signUpForm";
import Counter from "./counter";
import Matchups from "./matchup";
import CurrentLiveMatch from "./currentLiveMatch";
import NewsArticles from "./newsArticles";
// const initialState = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     matchups: [],
//     currentLiveMatch: {},
//     newsArticles: [],
//     previousMatchVideos: [],
//     userData: [],
// };

const rootReducer = combineReducers({
    signUpFormData,
    Counter,
    Matchups,
    CurrentLiveMatch,
    NewsArticles,
    // switch (action.type){
    //     case "SIGNUPFORM_FIRSTNAME":
    //         return {...state, firstName:action.payload}
    //     case "SIGNUPFORM_LASTNAME":
    //         return {...state, lasstName:action.payload}
    //     case "SIGNUPFORM_EMAIL":
    //         return {...state, email:action.payload}
    //     case "SIGNUPFORM_PASSWORD":
    //         return {...state, password:action.payload}
    //     default:
    //         return state;
    // }
});
export default rootReducer;