import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_GRAPHQL || 'http://localhost:5050/graphql', 
  cache: new InMemoryCache(),
});

export default client;
