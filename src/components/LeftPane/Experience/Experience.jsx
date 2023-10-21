import React, { useState, useRef } from "react";
import Button from "../../UI/Button/Button";
import styles from "./Experience.module.css";
import Input from "../../UI/Input/Input";
import Card from "../../UI/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  const [arrowClicked, setArrowClicked] = useState(false);
  const refs = {
    company: useRef(null),
    title: useRef(null),
    start: useRef(null),
    end: useRef(null),
    description: useRef(null),
  };

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
            reference={refs.company}
          />
          <Input
            type="text"
            placeholder="Job Title"
            label="Job Title:"
            forElement="jobTitle"
            reference={refs.title}
          />

          <Input
            type="date"
            label="Start Date:"
            forElement="startDate"
            reference={refs.start}
          />
          <Input
            type="date"
            label="End Date (leave blank if currently employed):"
            forElement="endDate"
            reference={refs.end}
          />

          <textarea
            className={styles["job-description"]}
            placeholder="Enter your job description - maximum 300 characters"
            ref={refs.description}
            maxLength="300"
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
