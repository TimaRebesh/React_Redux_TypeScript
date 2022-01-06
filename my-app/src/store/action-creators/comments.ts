import axios from "axios"
import { Dispatch } from "redux"
import { CommentsAction, CommentsActionTypes } from "../../types/comments"

export const fetchComments = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({ type: CommentsActionTypes.COMMENTS_FETCH })
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments',
                { params: { _page: page, _limit: limit } });
            dispatch({
                type: CommentsActionTypes.COMMENTS_FETCH_SUCCESS,
                payload: response.data
            })

        }
        catch (e) {
            dispatch({
                type: CommentsActionTypes.COMMENTS_FETCH_ERROR,
                payload: 'Error by comments loading'
            })
        }
    }
}

export const changePage = (page: number): CommentsAction => {
    return {
        type: CommentsActionTypes.COMMENTS_CHANGE_PAGE,
        pageNumber: page
    }
}
