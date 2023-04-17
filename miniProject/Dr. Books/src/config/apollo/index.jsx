import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://saved-dory-83.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "uPenyX8I4QIIl6nHSXHYOF574LdTG3HB5bH16moPeoYatZUyi70tah72mvd9bFAA",
      },
    },
  })
);

const httpLink = new HttpLink({
  uri: "https://saved-dory-83.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "uPenyX8I4QIIl6nHSXHYOF574LdTG3HB5bH16moPeoYatZUyi70tah72mvd9bFAA",
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
