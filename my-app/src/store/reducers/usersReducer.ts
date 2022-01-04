import { UsersAction, UsersActionTypes, UsersState } from "../../types/users";

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: null
}

const usersReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UsersActionTypes.USERS_FETCH:
            return { ...state, isLoading: true };
        case UsersActionTypes.USERS_FETCH_SUCCESS:
            return { ...state, isLoading: false, users: action.payload };
        case UsersActionTypes.USERS_FETCH_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
}

export default usersReducer
