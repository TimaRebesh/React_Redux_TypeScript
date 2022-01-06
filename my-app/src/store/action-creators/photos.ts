import axios from "axios"
import { Dispatch } from "redux"
import { PhotosAction, PhotosActionTypes } from "../../types/photos"

export const fetchPhotos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<PhotosAction>) => {
        try {
            dispatch({ type: PhotosActionTypes.PHOTOS_FETCH })
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos',
                { params: { _page: page, _limit: limit } });
            dispatch({
                type: PhotosActionTypes.PHOTOS_FETCH_SUCCESS,
                payload: response.data
            })

        }
        catch (e) {
            dispatch({
                type: PhotosActionTypes.PHOTOS_FETCH_ERROR,
                payload: 'Error by photos loading'
            })
        }
    }
}

export const changePagePhotos = (page: number): PhotosAction => {
    return {
        type: PhotosActionTypes.PHOTOS_CHANGE_PAGE,
        pageNumber: page
    }
}
