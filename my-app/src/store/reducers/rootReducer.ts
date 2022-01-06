import { combineReducers } from "redux";
import albumsReducer from "./albumsReducer";
import commentsReducer from "./commentsReducer";
import photosReducer from "./photosReducer";
import tabBarReducer from "./tabBarReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    tabbar: tabBarReducer,
    users: usersReducer,
    comments: commentsReducer,
    albums: albumsReducer,
    photos: photosReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
