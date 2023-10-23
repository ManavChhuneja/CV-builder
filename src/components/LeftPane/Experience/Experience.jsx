import React, { useState, useRef, useContext } from "react";
import Button from "../../UI/Button/Button";
import styles from "./Experience.module.css";
import Input from "../../UI/Input/Input";
import Card from "../../UI/Card/Card";
import ResumeContext from "../../Contexts/ResumeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

export default function Experience() {
  const [arrowClicked, setArrowClicked] = useState(false);
  const updateResumeData = useContext(ResumeContext);
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

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // focusing on empty refs
    for (let key in refs) {
      if (key === "end") continue;
      if (refs[key].current && !refs[key].current.value) {
        refs[key].current.focus();
        return;
      }
    }

    // setting the experience data object that holds current input values

    const experienceData = {
      company: refs.company.current.value,
      title: refs.title.current.value,
      start: refs.start.current.value,
      end: refs.end.current.value || "Present", // if end is null, it's set to present
      description: refs.description.current.value,
      id: uuidv4(), // random id using uuid library
    };

    // updating the resume data with the provided info
    updateResumeData((prevState) => ({
      ...prevState,
      experience: [...prevState.experience, experienceData],
    }));

    // resetting the input refs
    refs.company.current.value = "";
    refs.title.current.value = "";
    refs.start.current.value = "";
    refs.end.current.value = "";
    refs.description.current.value = "";
  };

  // Clearing out the inputs on reset click
  const resetClickHandler = () => {
    refs.company.current.value = "";
    refs.title.current.value = "";
    refs.start.current.value = "";
    refs.end.current.value = "";
    refs.description.current.value = "";
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
        <form
          className={styles["experience-form"]}
          onSubmit={formSubmitHandler}
        >
          <h3>Enter your contact details</h3>
          <Input
            type="text"
            placeholder="Company Name"
            label="Company:"
            forElement="company"
            ref={refs.company}
          />
          <Input
            type="text"
            placeholder="Job Title"
            label="Job Title:"
            forElement="jobTitle"
            ref={refs.title}
          />

          <Input
            type="date"
            label="Start Date:"
            forElement="startDate"
            ref={refs.start}
          />
          <Input
            type="date"
            label="End Date (leave blank if currently employed):"
            forElement="endDate"
            ref={refs.end}
          />

          <textarea
            className={styles["job-description"]}
            placeholder="Enter your job description - maximum 300 characters"
            ref={refs.description}
            maxLength="300"
          ></textarea>
          <div className={styles.buttons}>
            <Button text="Submit" type="submit" />
            <Button
              text="Reset"
              type="reset"
              onButtonClick={resetClickHandler}
            />
          </div>
        </form>
      )}
    </Card>
  );
}
