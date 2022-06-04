import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return <main className={styles.container}>{children}</main>;
}
