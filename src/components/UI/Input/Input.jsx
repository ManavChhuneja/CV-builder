import React from "react";
import styles from "./Input.module.css";

export default function Input({ type, placeholder }) {
  return (
    <input type={type} placeholder={placeholder} className={styles.input} />
  );
}
