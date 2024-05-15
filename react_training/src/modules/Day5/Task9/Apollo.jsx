import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./Task9";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

const Apollo = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
export default Apollo;
