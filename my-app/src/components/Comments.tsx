import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import useTypedSelector from "../hooks/useTypedSelector";
import '../style.css';

export default function Comments() {

    const { comments, isLoading, error, page, limit } = useTypedSelector(state => state.comments);
    const { fetchComments, changePage } = useActions();

    const buttons = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchComments(page, limit);
    }, [page])

    if (error)
        return <div>{error}</div>

    return (
        <div>Comments
            <div className='list'>
                {isLoading ?
                    <div>...Loading</div>
                    :
                    comments.map(c => <div key={c.id}>{c.id}. {c.body}</div>)
                }
            </div>
            <div className='paginator'>
                {buttons.map(b =>
                    <button
                        key={b}
                        onClick={() => changePage(b)}
                        className={b === page ? 'selected' : ''}
                    >{b}</button>)}
            </div>
        </div>
    )
}
