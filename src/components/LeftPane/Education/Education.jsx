import React, { useState, useRef, useContext } from "react";
import Button from "../../UI/Button/Button";
import styles from "./Education.module.css";
import Input from "../../UI/Input/Input";
import Card from "../../UI/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ResumeContext from "../../Contexts/ResumeContext";
import { v4 as uuidv4 } from "uuid";

export default function Education() {
  // setting arrow clicked state and rendering the card components when the arrow is clicked
  const [arrowClicked, setArrowClicked] = useState(false);
  const updateResumeData = useContext(ResumeContext);
  const refs = {
    college: useRef(null),
    degree: useRef(null),
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

    // education data object that holds the current values of the inputs
    const educationData = {
      college: refs.college.current.value,
      degree: refs.degree.current.value,
      start: refs.start.current.value,
      end: refs.end.current.value || "Present", // if users leave it null then it's set to present
      description: refs.description.current.value,
      id: uuidv4(), // setting the id to random uuid
    };

    // updating the resume data with the provided info
    updateResumeData((prevState) => ({
      ...prevState,
      education: [...prevState.education, educationData],
    }));

    // setting the refs to empty values to clear the inputs
    refs.college.current.value = "";
    refs.degree.current.value = "";
    refs.start.current.value = "";
    refs.end.current.value = "";
    refs.description.current.value = "";
  };

  // Clearing out the inputs on reset click
  const resetClickHandler = () => {
    refs.college.current.value = "";
    refs.degree.current.value = "";
    refs.start.current.value = "";
    refs.end.current.value = "";
    refs.description.current.value = "";
  };

  return (
    <Card>
      <div className={styles["visible-container"]}>
        <h2 className={styles["education-heading"]}>Education</h2>
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
        <form className={styles["education-form"]} onSubmit={formSubmitHandler}>
          <h3>Enter your contact details</h3>
          <Input
            type="text"
            placeholder="College/University Name"
            label="College/University:"
            forElement="college"
            ref={refs.college}
          />
          <Input
            type="text"
            placeholder="Degree"
            label="Degree:"
            forElement="degree"
            ref={refs.degree}
          />

          <Input
            type="date"
            label="Start Date:"
            forElement="startDate"
            ref={refs.start}
          />
          <Input
            type="date"
            label="End Date (leave blank if currently enrolled):"
            forElement="endDate"
            ref={refs.end}
          />

          <textarea
            className={styles["education-description"]}
            placeholder="Add additional information if needed - maximum 200 characters"
            ref={refs.description}
            maxLength="200"
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
