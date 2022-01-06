import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import photosReducer from "./photosReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    comments: commentsReducer,
    photos: photosReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
