"use client";
import Link from "next/link";
import styles from "@/styles/Dashboard.module.css";
import { useState } from "react";

export default function Sidebar() {
  // const [side, setSide] = useState<boolean>(false);
  // const toogleSidebar = () => {
  //   setSide((prev) => !prev);
  // };
  return (
    <div>
      {/* data-collapse={side} */}
      <div className={styles.navLink}>
        <div className={styles.logo}>
          <span className="material-symbols-outlined">local_library</span>
        </div>
        <ul>
          <li>
            <Link
              href="/"
              className="tooltip tooltip-right"
              data-tip="Dashboard"
            >
              <span className="material-symbols-outlined">dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/teacher"
              className="tooltip tooltip-right"
              data-tip="Teacher"
            >
              <span className="material-symbols-outlined">person_book</span>
            </Link>
          </li>
          <li>
            <Link
              href="/class"
              className="tooltip tooltip-right"
              data-tip="Class"
            >
              <span className="material-symbols-outlined">apartment</span>
            </Link>
          </li>
          <li>
            <Link
              href="/student"
              className="tooltip tooltip-right"
              data-tip="Student"
            >
              <span className="material-symbols-outlined">school</span>
            </Link>
          </li>
          <li>
            <Link
              href="/parent"
              className="tooltip tooltip-right"
              data-tip="Parent"
            >
              <span className="material-symbols-outlined">
                escalator_warning
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/grade"
              className="tooltip tooltip-right"
              data-tip="Grade"
            >
              <span className="material-symbols-outlined">star</span>
            </Link>
          </li>
          <li>
            <Link
              href="/enroullment"
              className="tooltip tooltip-right"
              data-tip="Enroullment"
            >
              <span className="material-symbols-outlined">cached</span>
            </Link>
          </li>
          <li>
            <Link
              href="/attendance"
              className="tooltip tooltip-right"
              data-tip="Attendance"
            >
              <span className="material-symbols-outlined">topic</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
