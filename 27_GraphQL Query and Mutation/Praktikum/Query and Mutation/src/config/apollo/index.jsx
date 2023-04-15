import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://knowing-orca-77.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret":
        "HBwO8B2sQY2qra9dQ8y6zbKZXK0dkIHJoeIXPVTmOR4l4w2qT170H8WFdMCTbQYV",
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
