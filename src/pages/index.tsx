import { useState } from "react";
import type { NextPage } from "next";

import Intro from "@/components/intro";
import Search from "@/components/search";
import SearchResults from "@/components/searchResults";

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // TODO: URLProvider - Get searchTerm from query

  return (
    <>
      <Intro />
      <Search setSearchTerm={setSearchTerm} />
      <SearchResults searchTerm={searchTerm} />
    </>
  );
};

export default Home;
