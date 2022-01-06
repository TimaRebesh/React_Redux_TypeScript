export enum AlbumsActionTypes {
    ALBUMS_FETCH = 'ALBUMS_FETCH',
    ALBUMS_FETCH_SUCCESS = 'ALBUMS_FETCH_SUCCESS',
    ALBUMS_FETCH_ERROR = 'ALBUMS_FETCH_ERROR',
}

interface FetchAlbumsAction {
    type: AlbumsActionTypes.ALBUMS_FETCH;
}

interface FetchAlbumsActionSuccess {
    type: AlbumsActionTypes.ALBUMS_FETCH_SUCCESS;
    payload: any[];
}

interface FetchAlbumsActionError {
    type: AlbumsActionTypes.ALBUMS_FETCH_ERROR;
    payload: string;
}

export type AlbumsAction = FetchAlbumsAction | FetchAlbumsActionSuccess | FetchAlbumsActionError;

export interface AlbumsState {
    albums: any[],
    isLoading: boolean;
    error: null | string;
}
