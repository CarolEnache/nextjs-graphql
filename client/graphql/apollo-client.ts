import { ApolloClient, InMemoryCache } from "@apollo/client";
import { END_POINT } from "../constants";

export const createApolloClient = () => {
  return new ApolloClient({
    uri: END_POINT,
    cache: new InMemoryCache(),
  });
};
