import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import useTypedSelector from "../hooks/useTypedSelector";

export default function UsersList() {

    const { users, isLoading, error } = useTypedSelector(state => state.users);
    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers();
    }, [])


    const getContent = () => {
        if (isLoading)
            return <div>...Loading</div>
        if (error)
            return <div>{error}</div>
        return <>
            {users.map(u => <div key={u.id}>{u.name} - {u.website}</div>)}
        </>
    }

    return (
        <div className='list'>
            {getContent()}
        </div>
    )
}
