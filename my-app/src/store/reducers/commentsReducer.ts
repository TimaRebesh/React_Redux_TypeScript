import { CommentsAction, CommentsState, CommentsActionTypes } from "../../types/comments";

const initialState: CommentsState = {
    comments: [],
    page: 1,
    limit: 10,
    isLoading: false,
    error: null,
}

const commentsReducer = (state = initialState, action: CommentsAction): CommentsState => {
    switch (action.type) {
        case CommentsActionTypes.COMMENTS_FETCH:
            return { ...state, isLoading: true };
        case CommentsActionTypes.COMMENTS_FETCH_SUCCESS:
            return { ...state, isLoading: false, comments: action.payload };
        case CommentsActionTypes.COMMENTS_FETCH_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        case CommentsActionTypes.COMMENTS_CHANGE_PAGE:
            return { ...state, page: action.pageNumber };
        default:
            return state;
    }
}

export default commentsReducer
