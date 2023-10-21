import React from "react";
import styles from "./Title.module.css";

export default function Title() {
  return (
    <div className={styles["title-container"]}>
      <h1 className={styles.name}>John Wick</h1>
      <div className={styles["contact-info"]}>
        <p>john.wick@babayaga.com</p>
        <p>900-000-0000</p>
      </div>
    </div>
  );
}
