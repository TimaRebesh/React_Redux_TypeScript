import axios from "axios"
import { Dispatch } from "redux"
import { UsersAction, UsersActionTypes } from "../../../types/users"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({ type: UsersActionTypes.USERS_FETCH })
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({
                type: UsersActionTypes.USERS_FETCH_SUCCESS,
                payload: response.data
            })

        }
        catch (e) {
            dispatch({
                type: UsersActionTypes.USERS_FETCH_ERROR,
                payload: 'Error by users loading'
            })
        }
    }
}
