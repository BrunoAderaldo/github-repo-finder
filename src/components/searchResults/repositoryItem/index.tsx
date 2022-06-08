import Link from "next/link";
// import { Repository } from "@/lib/types/githubTypes";

import styles from "./repositoryItem.module.scss";

// interface RepositoryProps {
//   name: string;
//   description?: string;
//   owner: { login: string };
//   primaryLanguage: string;
//   stargazers: { totalCount: string };
// }

// interface RepositoryItemProps {
//   repository: Repository;
// }

// TODO: Figure out which type should be used for repository
// export default function RepositoryItem({ repository }: RepositoryItemProps) {
export default function RepositoryItem({ repository }: any) {
  const {
    name,
    description,
    owner: { login },
    primaryLanguage,
    stargazers: { totalCount },
  } = repository;

  return (
    <article className={styles.card}>
      <Link href={`/${login}/${name}`}>
        <a className={styles.title}>{name}</a>
      </Link>
      <span className={styles.owner}>
        <small>by</small> {login}{" "}
      </span>
      {description && <p className={styles.description}>{description}</p>}
    </article>
  );
}
