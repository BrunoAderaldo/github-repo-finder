import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GitHub Repo Finder</title>
        <meta
          name="description"
          content="GitHub Repo Finder - Search for repositories"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>GitHub Repo Finder</h1>
      </main>
    </div>
  );
};

export default Home;
