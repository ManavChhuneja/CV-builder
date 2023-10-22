import React from "react";
import { forwardRef } from "react";
import styles from "./Input.module.css";

// Reusable input element wtih forward refs

const Input = forwardRef((props, ref) => {
  const { type, placeholder, label, forElement } = props;
  return (
    <>
      <label htmlFor={forElement}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        id={forElement}
        ref={ref}
      />
    </>
  );
});

export default Input;
