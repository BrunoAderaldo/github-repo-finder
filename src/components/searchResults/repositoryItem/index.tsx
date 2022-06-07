import Link from "next/link";
import { Repository } from "@/lib/types/githubTypes";

import styles from "./repositoryItem.module.scss";

// interface RepositoryProps {
//   name: string;
//   description?: string;
//   owner: { login: string };
//   primaryLanguage: string;
//   stargazers: { totalCount: string };
// }

interface RepositoryItemProps {
  key: string;
  repository: Repository;
}

export default function RepositoryItem({ repository }: RepositoryItemProps) {
  const {
    name,
    description,
    owner: { login },
    primaryLanguage,
    stargazers: { totalCount },
  } = repository;

  return (
    <article className={styles.card}>
      <div className={styles.heading}>
        <Link href={`/${login}/${name}`}>
          <a className={styles.title}>{name}</a>
        </Link>
      </div>
      <span className={styles.owner}>
        <small>by</small> {login}{" "}
      </span>
      {description && <p className={styles.description}>{description}</p>}
    </article>
  );
}
