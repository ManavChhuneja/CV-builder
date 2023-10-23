import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Button from "../Button/Button";

export default function Modal({ onClose }) {
  return (
    <>
      {createPortal(
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <p>Please add required information before downloading</p>
            <Button text="Ok" type="button" />
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
}
