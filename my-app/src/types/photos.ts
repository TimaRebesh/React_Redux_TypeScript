export enum PhotosActionTypes {
    PHOTOS_FETCH = 'PHOTOS_FETCH',
    PHOTOS_FETCH_SUCCESS = 'PHOTOS_FETCH_SUCCESS',
    PHOTOS_FETCH_ERROR = 'PHOTOS_FETCH_ERROR',
    PHOTOS_CHANGE_PAGE= 'PHOTOS_CHANGE_PAGE'
}

interface FetchPhotosAction {
    type:PhotosActionTypes.PHOTOS_FETCH;
}

interface FetchPhotosActionSuccess {
    type:PhotosActionTypes.PHOTOS_FETCH_SUCCESS;
    payload: any[];
}

interface FetchPhotosActionError {
    type:PhotosActionTypes.PHOTOS_FETCH_ERROR;
    payload: string;
}

interface changePhotosPageAction {
    type: PhotosActionTypes.PHOTOS_CHANGE_PAGE;
    pageNumber: number;
}

export type PhotosAction = FetchPhotosAction | FetchPhotosActionSuccess | FetchPhotosActionError | changePhotosPageAction;

export interface PhotosState {
    photos: any[],
    page: number,
    limit: number,
    isLoading: boolean,
    error: null | string,
}
