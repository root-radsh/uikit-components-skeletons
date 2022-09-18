import "./App.css";
import { Main } from "./components/Main/Main";
import { Skeleton } from "./components/skeletons/Skeleton/Skeleton";

function App() {
  return (
    <div className="App">
      <Main>
        <div className="base">
          <Skeleton type="avatar"/>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />

        </div>
      </Main>
    </div>
  );
}

export default App;
