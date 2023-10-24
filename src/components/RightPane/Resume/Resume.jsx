import React from "react";
import styles from "./Resume.module.css";
import Title from "./Title/Title";
import Entry from "./Entry/Entry";
import EducationList from "./ResumeContent/EducationList/EducationList";
import ExperienceList from "./ResumeContent/ExperienceList/ExperienceList";

export default function Resume() {
  return (
    <div className={styles["resume-container"]} id="resume">
      <Title />
      <ExperienceList />
      <hr />
      <EducationList />
    </div>
  );
}
