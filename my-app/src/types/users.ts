export enum UsersActionTypes {
    USERS_FETCH = 'USERS_FETCH',
    USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS',
    USERS_FETCH_ERROR = 'USERS_FETCH_ERROR',
}

interface FetchUsersAction {
    type: UsersActionTypes.USERS_FETCH;
}

interface FetchUsersActionSuccess {
    type: UsersActionTypes.USERS_FETCH_SUCCESS;
    payload: any[];
}

interface FetchUsersActionError {
    type: UsersActionTypes.USERS_FETCH_ERROR;
    payload: string;
}

export type UsersAction = FetchUsersAction | FetchUsersActionSuccess | FetchUsersActionError;

export interface UsersState {
    users: any[],
    isLoading: boolean;
    error: null | string;
}
