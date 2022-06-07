import { Dispatch, SetStateAction } from "react";

interface SearchProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export default function Search({ setSearchTerm }: SearchProps) {
  return (
    <>
      <input
        type="text"
        placeholder="Try BrunoAderaldo"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
}
