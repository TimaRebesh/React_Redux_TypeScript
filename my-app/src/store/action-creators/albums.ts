import axios from "axios"
import { Dispatch } from "redux"
import { AlbumsAction, AlbumsActionTypes } from "../../types/albums"

export const fetchAlbums = () => {
    return async (dispatch: Dispatch<AlbumsAction>) => {
        try {
            dispatch({ type: AlbumsActionTypes.ALBUMS_FETCH })
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
            dispatch({
                type: AlbumsActionTypes.ALBUMS_FETCH_SUCCESS,
                payload: response.data
            })

        }
        catch (e) {
            dispatch({
                type: AlbumsActionTypes.ALBUMS_FETCH_ERROR,
                payload: 'Error by albums loading'
            })
        }
    }
}
