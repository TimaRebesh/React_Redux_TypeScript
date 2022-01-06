import { useActions } from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';
import '../style.css';

export default function TabBar() {

    const { tab } = useTypedSelector(state => state.tabbar);
    const { switchTabBar } = useActions();
    const tabs = [1, 2, 3]

    return (
        <div className='tab-bar'>
            {tabs.map(t => (
                <div
                    key={t}
                    className={`tab ${t === tab ? 'selected' : ''}`}
                    onClick={() => switchTabBar(t)}
                >
                    <div className='tab-content'>{t}</div>
                </div>
            ))}
        </div>
    )
}
