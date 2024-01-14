import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "../graphql/apollo-client";
import { Container, GlobalStyles } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  const client = createApolloClient();
  return (
    <Container>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Container>
  )
}

export default MyApp;
