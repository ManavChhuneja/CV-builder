import React, { useContext } from "react";
import styles from "./DownloadReset.module.css";
import Button from "../../UI/Button/Button";
import ResumeContext from "../../Contexts/ResumeContext";

export default function DownloadReset() {
  const updateResumeData = useContext(ResumeContext);

  const resetResumeClickHandler = () => {
    updateResumeData({
      education: [],
      experience: [],
      contact: {},
    });
  };

  return (
    <div className={styles.flexContainer}>
      <Button text="Download Resume" />
      <Button
        type="reset"
        text="Reset Resume"
        onButtonClick={resetResumeClickHandler}
      />
    </div>
  );
}
