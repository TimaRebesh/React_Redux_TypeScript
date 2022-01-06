import Comments from './components/Comments';
import Photos from './components/Photos';
import TabBar from './components/TabBar';
import UsersList from './components/UsersList';

function App() {
  return (
    <div>
      <TabBar />
      <Photos />
      <UsersList />
      <Comments />
    </div>
  );
}

export default App;
