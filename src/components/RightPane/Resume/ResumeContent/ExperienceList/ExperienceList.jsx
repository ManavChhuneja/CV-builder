import React, { useContext } from "react";
import Entry from "../../Entry/Entry";
import styles from "./ExperienceList.module.css";
import ResumeContext from "../../../../Contexts/ResumeContext";

function ExperienceList() {
  const resumeData = useContext(ResumeContext);
  return (
    <>
      {resumeData.experience.length > 0 && (
        <div className={styles.experience}>
          <h2>Work Experience</h2>
          {resumeData.experience.map((job) => {
            return (
              <Entry
                title={job.title}
                company={job.company}
                startDate={job.start}
                endDate={job.end}
                description={job.description}
                key={job.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default ExperienceList;
