import React from "react";
import styles from "./Input.module.css";

export default function Input({ type, placeholder, label, forElement }) {
  return (
    <>
      <label htmlFor={forElement}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        id={forElement}
      />
    </>
  );
}
