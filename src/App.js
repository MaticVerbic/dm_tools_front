import logo from './logo.svg';
import './App.css';
import {
  ApolloClient, 
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetClassesData from "./Components/GetClassesData";
import Navbar from "./Components/Navbar";

const errorLink = onError(({ graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path}) => {
      alert(`graphql error ${message}`)
    })
  }
});

const link = from([
  errorLink,
  new HttpLink({uri: "http://localhost:8001/query"})
]);

const client = new ApolloClient({
  cache: new InMemoryCache, 
  link: link, 
});



function App() {
  return <ApolloProvider client={client}>
    <Navbar />
    <GetClassesData />
    </ApolloProvider>
}

export default App;
