import React from "react";
import DownloadReset from "./DownloadReset/DownloadReset";
import styles from "./LeftPane.module.css";
import Contacts from "./Contacts/Contacts";
import Experience from "./Experience/Experience";

export default function LeftPane() {
  return (
    <div className={styles.leftPane}>
      <DownloadReset />
      <Contacts />
      <Experience />
    </div>
  );
}
