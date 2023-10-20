import React from "react";
import styles from "./DownloadReset.module.css";
import Button from "../../UI/Button/Button";

export default function DownloadReset() {
  return (
    <div className={styles.flexContainer}>
      <Button text="Download Resume" />
      <Button type="reset" text="Reset Resume" />
    </div>
  );
}
