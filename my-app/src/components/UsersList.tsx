import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import useTypedSelector from "../hooks/useTypedSelector";

export default function UsersList() {

    const { users, isLoading, error } = useTypedSelector(state => state.users);
    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers();
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
