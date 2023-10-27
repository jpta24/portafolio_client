import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5050', // reemplaza con tu URI del servidor GraphQL
  cache: new InMemoryCache(),
});

export default client;
