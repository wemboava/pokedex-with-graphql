import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Me contrata</h2>
      </div>
    </ApolloProvider>
  );
}

export default App;
