import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import styles from "@/styles/Dashboard.module.css";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <aside className={styles.container}>
      <span className={styles.drawer}>
        <Sidebar />
      </span>
      <span className={styles.content}>
        <Header />
        {children}
      </span>
    </aside>
  );
}
