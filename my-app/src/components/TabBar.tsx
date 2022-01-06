import { useActions } from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';
import '../style.css';

export default function TabBar() {

    const { tab } = useTypedSelector(state => state.tabbar);
    const { switchTabBar } = useActions();
    
    const tabs = [
        { id: 1, text: 'Users' },
        { id: 2, text: 'Comments' },
        { id: 3, text: 'Albums' },
        { id: 4, text: 'Photos' },
    ]

    return (
        <div className='tab-bar'>
            {tabs.map(t => (
                <div
                    key={t.id}
                    className={`tab ${t.id === tab ? 'selected' : ''}`}
                    onClick={() => switchTabBar(t.id)}
                >
                    <div className='tab-content'>{t.text}</div>
                </div>
            ))}
        </div>
    )
}
