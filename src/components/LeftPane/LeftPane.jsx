import React from "react";
import DownloadReset from "./DownloadReset/DownloadReset";
import styles from "./LeftPane.module.css";

export default function LeftPane() {
  return (
    <div className={styles.leftPane}>
      <DownloadReset />
    </div>
  );
}
