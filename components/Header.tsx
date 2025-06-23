import React from "react";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <main className={styles.main}>
      <section>
        <div className={styles.search}>
          <span className="material-symbols-outlined">search</span>
          <input type="search" placeholder="Search..." />
        </div>
      </section>

      <section className={styles.container}>
        <span className="material-symbols-outlined">notifications_active</span>
        <span className="material-symbols-outlined">account_circle</span>
      </section>
    </main>
  );
}
