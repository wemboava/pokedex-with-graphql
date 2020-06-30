import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import { InMemoryCache } from "apollo-cache-inmemory";

import Routes from "./routes";
import GlobalStyles from "./styles/global";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/",
  cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
