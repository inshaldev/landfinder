import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigationbar } from './components/Layout/Navigationbar';
import { Home } from './containers/Home/Home';
import Properties from './containers/Properties/Properties';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { DataContext } from './contexts/DataContext';
import PropertyDetails from './components/Properties/PropertyDetails';

const APIRoute = process.env.REACT_APP_API_ROUTE;

function App() {
  const client = new ApolloClient({
    uri: `${APIRoute}/graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <DataContext>
          <BrowserRouter>
            <Navigationbar />
            <main className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/properties"
                  element={<Properties APIRoute={APIRoute} />}
                />
                <Route
                  path="/properties/:propertyId"
                  element={<PropertyDetails />}
                />
              </Routes>
            </main>
          </BrowserRouter>
        </DataContext>
      </ApolloProvider>
    </>
  );
}

export default App;
