import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useTypedSelector from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/reducers/actiron-creators/users";

export default function UsersList() {

    const { users, isLoading, error } = useTypedSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (isLoading)
        return <div>...Loading</div>

    if (error)
        return <div>{error}</div>

    return (
        <div>
            {users.map(u => <div key={u.id}>{u.name}</div>)}
        </div>
    )
}
