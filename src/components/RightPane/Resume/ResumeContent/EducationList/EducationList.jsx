import React, { useContext } from "react";
import ResumeContext from "../../../../Contexts/ResumeContext";
import Entry from "../../Entry/Entry";
import styles from "./EducationList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function EducationList() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const deleteEntryHandler = (id) => {
    const updatedEducation = resumeData.education.filter(
      (edu) => edu.id !== id
    );
    setResumeData((prevData) => ({
      ...prevData,
      education: updatedEducation,
    }));
  };

  return (
    <>
      {resumeData.education.length > 0 && (
        <div className={styles.education}>
          <h2>Education</h2>
          {resumeData.education.map((edu) => {
            return (
              <div className={styles["flex-container"]} key={edu.id}>
                <Entry
                  title={edu.degree}
                  company={edu.college}
                  startDate={edu.start}
                  endDate={edu.end}
                  description={edu.description}
                />
                <button
                  className={styles.trash}
                  onClick={() => deleteEntryHandler(edu.id)}
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

export default EducationList;
