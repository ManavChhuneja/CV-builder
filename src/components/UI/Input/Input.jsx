import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, reference) => {
  const { type, placeholder, label, forElement } = props;

  return (
    <>
      <label htmlFor={forElement}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        id={forElement}
        ref={reference}
      />
    </>
  );
});

export default Input;
