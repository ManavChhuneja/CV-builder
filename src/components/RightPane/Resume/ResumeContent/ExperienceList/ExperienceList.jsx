import React, { useContext } from "react";
import Entry from "../../Entry/Entry";
import styles from "./ExperienceList.module.css";
import ResumeContext from "../../../../Contexts/ResumeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function ExperienceList() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const deleteEntryHandler = (id) => {
    const updatedExperience = resumeData.experience.filter(
      (job) => job.id !== id
    );
    setResumeData((prevData) => ({
      ...prevData,
      experience: updatedExperience,
    }));
  };

  return (
    <>
      {resumeData.experience.length > 0 && (
        <div className={styles.experience}>
          <h2>Work Experience</h2>
          {resumeData.experience.map((job) => {
            return (
              <div className={styles["flex-container"]} key={job.id}>
                <Entry
                  title={job.title}
                  company={job.company}
                  startDate={job.start}
                  endDate={job.end}
                  description={job.description}
                />
                <button
                  className={styles.trash}
                  onClick={() => deleteEntryHandler(job.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default ExperienceList;
