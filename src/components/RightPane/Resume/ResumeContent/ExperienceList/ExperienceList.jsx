import React from "react";
import Entry from "../../Entry/Entry";
import styles from "./ExperienceList.module.css";

function ExperienceList() {
  return (
    <div className={styles.experience}>
      <h2>Work Experience</h2>
      <Entry />
      <Entry />
      <Entry />
    </div>
  );
}

export default ExperienceList;
