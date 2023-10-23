import React, { useContext } from "react";
import ResumeContext from "../../../../Contexts/ResumeContext";
import Entry from "../../Entry/Entry";
import styles from "./EducationList.module.css";

function EducationList() {
  const resumeData = useContext(ResumeContext);
  return (
    <>
      {resumeData.education.length > 0 && (
        <div className={styles.education}>
          <h2>Education</h2>
          {resumeData.education.map((edu) => {
            return (
              <Entry
                title={edu.degree}
                company={edu.college}
                startDate={edu.start}
                endDate={edu.end}
                description={edu.description}
                key={edu.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default EducationList;
