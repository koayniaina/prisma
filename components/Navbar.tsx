import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import React from 'react'

export default function Navbar() {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <p>Managment</p>
          </div>
          <ul className={styles.navLink}>
            <li className={styles.Link}>
              <span className="material-symbols-outlined">co_present</span>
              <Link href="#">Home</Link>
            </li>
            <li className={styles.Link}>
              <span className="material-symbols-outlined">folder_info</span>
              <Link href="#">About</Link>
            </li>
            <li className={styles.Link}>
              <span className="material-symbols-outlined">local_library</span>
              <Link href="/crud">Student</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}
