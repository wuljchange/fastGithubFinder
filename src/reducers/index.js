import { combineReducers } from "redux-immutable";
import ui from "./ui/uiReducers";
import github from "./data/githubReducers";

const rootReducers = combineReducers({
    ui,
    github,
});

export default rootReducers;
