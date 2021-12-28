import { Navigationbar } from './components/Layout/Navigationbar';
import { Home } from './containers/Home/Home';

function App() {
  return (
    <>
      <Navigationbar />
      <main className="App">
        <Home />
      </main>
    </>
  );
}

export default App;
