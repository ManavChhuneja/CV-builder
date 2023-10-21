import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./Education.module.css";
import Input from "../../UI/Input/Input";
import Card from "../../UI/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  const [arrowClicked, setArrowClicked] = useState(false);

  const clickHandler = () => {
    setArrowClicked((prevState) => !prevState);
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
        <form className={styles["education-form"]}>
          <h3>Enter your contact details</h3>
          <Input
            type="text"
            placeholder="College/University Name"
            label="College/University:"
            forElement="college"
          />
          <Input
            type="text"
            placeholder="Degree"
            label="Degree:"
            forElement="degree"
          />

          <Input type="date" label="Start Date:" forElement="startDate" />
          <Input
            type="date"
            label="End Date (leave blank if currently employed):"
            forElement="endDate"
          />

          <textarea
            className={styles["education-description"]}
            placeholder="Add additional information if needed"
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
