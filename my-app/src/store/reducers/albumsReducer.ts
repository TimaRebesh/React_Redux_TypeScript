import { AlbumsAction, AlbumsActionTypes, AlbumsState } from "../../types/albums";


const initialState: AlbumsState = {
    albums: [],
    isLoading: false,
    error: null
}

const albumsReducer = (state = initialState, action: AlbumsAction): AlbumsState => {
    switch (action.type) {
        case AlbumsActionTypes.ALBUMS_FETCH:
            return { ...state, isLoading: true };
        case AlbumsActionTypes.ALBUMS_FETCH_SUCCESS:
            return { ...state, isLoading: false, albums: action.payload };
        case AlbumsActionTypes.ALBUMS_FETCH_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
}

export default albumsReducer
