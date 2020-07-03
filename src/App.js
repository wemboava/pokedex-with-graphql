import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import GlobalStyles from "./styles/global";

import client from "./apollo/config";

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
