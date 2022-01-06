import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import useTypedSelector from "../hooks/useTypedSelector";
import '../style.css';

export default function Albums() {

    const { albums, isLoading, error } = useTypedSelector(state => state.albums);
    const { fetchAlbums } = useActions();

    useEffect(() => {
        fetchAlbums();
    }, [])

    // console.log(albums)

    const getContent = () => {
        if (isLoading)
            return <div>...Loading</div>
        if (error)
            return <div>{error}</div>
        return <>
            {albums.map(a => <div key={a.id}>{a.id}) {a.title}</div>)}
        </>
    }

    return (
        <div className='list'>
            {getContent()}
        </div>
    )
}
