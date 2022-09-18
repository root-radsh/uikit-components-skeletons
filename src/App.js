import './App.css';
import { Main } from './components/Main/Main';
import { Skeleton } from './components/Skeleton/Skeleton';

function App() {
  return (
    <div className="App">
      <Main>
        <Skeleton/>
      </Main>
    </div>
  );
}

export default App;
