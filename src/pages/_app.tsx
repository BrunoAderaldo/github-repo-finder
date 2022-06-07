import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import client from "@/lib/apolloClient";
import Layout from "@/components/layouts";

import "@/base/styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}

export default MyApp;
