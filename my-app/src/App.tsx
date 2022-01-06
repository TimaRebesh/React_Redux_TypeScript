import Comments from './components/Comments';
import Photos from './components/Photos';
import TabBar from './components/TabBar';
import UsersList from './components/UsersList';
import useTypedSelector from './hooks/useTypedSelector';

function App() {

  const { tab } = useTypedSelector(state => state.tabbar);

  const getContent = () => {
    switch (tab) {
      case 1:
        return <UsersList />;
      case 2:
        return <Comments />;
      case 3:
        return <UsersList />;
      case 4:
        return <Photos />;
      default:
        return <UsersList />
    }
  }

  return (
    <div>
      <TabBar />
      {getContent()}
    </div>
  );
}

export default App;
