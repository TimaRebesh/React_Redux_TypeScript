import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import photosReducer from "./photosReducer";
import tabBarReducer from "./tabBarReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    comments: commentsReducer,
    photos: photosReducer,
    tabbar: tabBarReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
