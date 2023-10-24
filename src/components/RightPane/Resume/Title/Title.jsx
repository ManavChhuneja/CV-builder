import React, { useContext } from "react";
import ResumeContext from "../../../Contexts/ResumeContext";
import styles from "./Title.module.css";

export default function Title() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  return (
    <div className={styles["title-container"]}>
      <h1 className={styles.name}>{resumeData.contact.name}</h1>
      <div className={styles["contact-info"]}>
        <p>{resumeData.contact.email}</p>
        <p>{resumeData.contact.phone}</p>
      </div>
    </div>
  );
}
