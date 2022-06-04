import styles from "./intro.module.scss";

export default function Intro() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>GitHub Repo Finder</h1>
      <p className={styles.text}>Search for repositories</p>
    </div>
  );
}
