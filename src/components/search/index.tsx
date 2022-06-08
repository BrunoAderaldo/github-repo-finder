import { Dispatch, SetStateAction } from "react";

import styles from "./search.module.scss";

interface SearchProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export default function Search({ setSearchTerm }: SearchProps) {
  return (
    <input
      type="text"
      placeholder="Try Bejamas"
      onChange={(e) => setSearchTerm(e.target.value)}
      className={styles.search}
    />
  );
}
