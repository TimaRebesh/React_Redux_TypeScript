import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';
import '../style.css';

export default function Photos() {

    const { photos, isLoading, error, page, limit } = useTypedSelector(state => state.photos);
    const { fetchPhotos, changePagePhotos } = useActions();

    const buttons = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchPhotos(page, limit);
    }, [page])

    if (error)
        return <div>{error}</div>

    return (
        <div>Photos
            <div className='list'>
                {isLoading ?
                    <div>...Loading</div>
                    :
                    photos.map(p => <div key={p.id}>
                        <img src={p.url} alt={p.title} />
                        <p>{p.title}</p>
                    </div>)
                }
            </div>
            <div className='paginator'>
                {buttons.map(b =>
                    <button
                        key={b}
                        onClick={() => changePagePhotos(b)}
                        className={b === page ? 'selected' : ''}
                    >{b}</button>)}
            </div>
        </div>
    )
}
