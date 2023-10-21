import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./Experience.module.css";
import Input from "../../UI/Input/Input";
import Card from "../../UI/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  const [arrowClicked, setArrowClicked] = useState(false);

  const clickHandler = () => {
    setArrowClicked((prevState) => !prevState);
  };
  return (
    <Card>
      <div className={styles["visible-container"]}>
        <h2 className={styles["experience-heading"]}>Experience</h2>
        <button onClick={clickHandler} className={styles.dropdown}>
          <FontAwesomeIcon
            icon={faArrowDown}
            className={`${styles["rotate-icon"]} ${
              arrowClicked ? styles["rotate"] : ""
            }`}
          />
        </button>
      </div>
      {arrowClicked && (
        <form className={styles["experience-form"]}>
          <h3>Enter your contact details</h3>
          <Input
            type="text"
            placeholder="Company Name"
            label="Company:"
            forElement="company"
          />
          <Input
            type="text"
            placeholder="Job Title"
            label="Job Title:"
            forElement="jobTitle"
          />

          <Input type="date" label="Start Date:" forElement="startDate" />
          <Input
            type="date"
            label="End Date (leave blank if currently employed):"
            forElement="endDate"
          />

          <textarea
            className={styles["job-description"]}
            placeholder="Enter your job description"
          ></textarea>
          <div className={styles.buttons}>
            <Button text="Submit" type="submit" />
            <Button text="Reset" type="reset" />
          </div>
        </form>
      )}
    </Card>
  );
}
