import { useQuery } from "@apollo/client";
import { useDebounce } from "use-debounce";

import { SearchResultItemEdge } from "@/lib/types/githubTypes";
import searchRepositories from "@/lib/queries/searchRepositories";
import RepositoryItem from "./repositoryItem";

import styles from "./searchResults.module.scss";

interface SearchResultsProps {
  searchTerm?: string;
}

export default function SearchResults({ searchTerm }: SearchResultsProps) {
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  const { loading, error, data } = useQuery(searchRepositories, {
    variables: {
      search_term: debouncedSearchTerm,
    },
  });

  if (loading && searchTerm) return <p>Loading...</p>;
  if (error) return <p>Error: error(</p>;

  return (
    <div className={styles.results}>
      {data?.search?.edges.map(({ node }: SearchResultItemEdge) => {
        if (!node?.id) return;

        return <RepositoryItem key={node.id} repository={node} />;
      })}
    </div>
  );
}
