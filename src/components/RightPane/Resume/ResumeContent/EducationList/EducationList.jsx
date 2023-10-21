import React from "react";
import Entry from "../../Entry/Entry";
import styles from "./EducationList.module.css";

function EducationList() {
  return (
    <div className={styles.education}>
      <h2>Education</h2>
      <Entry />
    </div>
  );
}

export default EducationList;
