import type { AppProps } from "next/app";

import Layout from "@/components/layouts";

import "@/base/styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
