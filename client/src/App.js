import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Global from './components/Global'
import Countries from './components/Countries'
import './App.less';

/** Create Client */
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider  client={client}>
      <>
        <h1>COVID-19 Tracker!</h1>
        <Global />
        <Countries />
      </>
    </ApolloProvider>

  );
}

export default App;
