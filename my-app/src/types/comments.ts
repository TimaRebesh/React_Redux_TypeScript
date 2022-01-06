export enum CommentsActionTypes {
    COMMENTS_FETCH = 'COMMENTS_FETCH',
    COMMENTS_FETCH_SUCCESS = 'COMMENTS_FETCH_SUCCESS',
    COMMENTS_FETCH_ERROR = 'COMMENTS_FETCH_ERROR',
    COMMENTS_CHANGE_PAGE= 'COMMENTS_CHANGE_PAGE'
}

interface FetchCommentsAction {
    type: CommentsActionTypes.COMMENTS_FETCH;
}

interface FetchCommentsActionSuccess {
    type: CommentsActionTypes.COMMENTS_FETCH_SUCCESS;
    payload: any[];
}

interface FetchCommentsActionError {
    type: CommentsActionTypes.COMMENTS_FETCH_ERROR;
    payload: string;
}

interface changePageAction {
    type: CommentsActionTypes.COMMENTS_CHANGE_PAGE;
    pageNumber: number;
}

export type CommentsAction = FetchCommentsAction | FetchCommentsActionSuccess | FetchCommentsActionError | changePageAction;

export interface CommentsState {
    comments: any[],
    page: number,
    limit: number,
    isLoading: boolean,
    error: null | string,
}
