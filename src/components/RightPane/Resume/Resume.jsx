import React, { useContext } from "react";
import styles from "./Resume.module.css";
import Title from "./Title/Title";
import Entry from "./Entry/Entry";
import EducationList from "./ResumeContent/EducationList/EducationList";
import ExperienceList from "./ResumeContent/ExperienceList/ExperienceList";
import ResumeContext from "../../Contexts/ResumeContext";

export default function Resume() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  return (
    <div className={styles["resume-container"]} id="resume">
      <Title />
      <ExperienceList />
      {resumeData.experience.length === 0 &&
      resumeData.education.length === 0 ? null : (
        <hr />
      )}
      <EducationList />
    </div>
  );
}
