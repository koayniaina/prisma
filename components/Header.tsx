import React from "react";
// import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <main >
      <section>
        <div >
          <span className="material-symbols-outlined">search</span>
          <input type="search" placeholder="Search..." />
        </div>
      </section>

      <section >
        <span className="material-symbols-outlined">notifications_active</span>
        <span className="material-symbols-outlined">account_circle</span>
      </section>
    </main>
  );
}
