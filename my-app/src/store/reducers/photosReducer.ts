import { PhotosAction, PhotosActionTypes, PhotosState } from "../../types/photos";

const initialState: PhotosState = {
    photos: [],
    page: 1,
    limit: 10,
    isLoading: false,
    error: null,
}

const photosReducer = (state = initialState, action: PhotosAction): PhotosState => {
    switch (action.type) {
        case PhotosActionTypes.PHOTOS_FETCH:
            return { ...state, isLoading: true };
        case PhotosActionTypes.PHOTOS_FETCH_SUCCESS:
            return { ...state, isLoading: false, photos: action.payload };
        case PhotosActionTypes.PHOTOS_FETCH_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        case PhotosActionTypes.PHOTOS_CHANGE_PAGE:
            return { ...state, page: action.pageNumber };
        default:
            return state;
    }
}

export default photosReducer
