// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: "https://knowing-orca-77.hasura.app/v1/graphql",
//     headers: {
//       "x-hasura-admin-secret":
//         "HBwO8B2sQY2qra9dQ8y6zbKZXK0dkIHJoeIXPVTmOR4l4w2qT170H8WFdMCTbQYV",
//     },
//   }),
//   cache: new InMemoryCache(),
// });

// export default client;

import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://knowing-orca-77.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "HBwO8B2sQY2qra9dQ8y6zbKZXK0dkIHJoeIXPVTmOR4l4w2qT170H8WFdMCTbQYV",
      },
    },
  })
);

const httpLink = new HttpLink({
  uri: "https://knowing-orca-77.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "HBwO8B2sQY2qra9dQ8y6zbKZXK0dkIHJoeIXPVTmOR4l4w2qT170H8WFdMCTbQYV",
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
