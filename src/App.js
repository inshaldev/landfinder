import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigationbar } from './components/Layout/Navigationbar';
import { Home } from './containers/Home/Home';
import Properties from './containers/Properties/Properties';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {
  const APIRoute = 'https://landfinder-backend.herokuapp.com';
  const client = new ApolloClient({
    uri: `${APIRoute}/graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <main className="App">
          <ApolloProvider client={client}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/properties"
                element={<Properties APIRoute={APIRoute} />}
              />
            </Routes>
          </ApolloProvider>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
