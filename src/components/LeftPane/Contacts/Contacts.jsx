import React, { useState, useRef, useEffect } from "react";
import Button from "../../UI/Button/Button";
import styles from "./Contacts.module.css";
import Input from "../../UI/Input/Input";
import Card from "../../UI/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Contacts() {
  const [arrowClicked, setArrowClicked] = useState(false);
  const refs = {
    name: useRef(null),
    email: useRef(null),
    phone: useRef(null),
  };

  const clickHandler = () => {
    setArrowClicked((prevState) => !prevState);
  };
  return (
    <Card>
      <div className={styles["visible-container"]}>
        <h2 className={styles["contact-heading"]}>Contact</h2>
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
        <form className={styles["contacts-form"]}>
          <h3>Enter your contact details</h3>
          <Input
            type="text"
            placeholder="Enter your name"
            label="Name:"
            forElement="name"
            reference={refs.name}
          />
          <Input
            type="email"
            placeholder="Enter your email"
            label="Email:"
            forElement="email"
            reference={refs.email}
          />
          <Input
            type="tel"
            placeholder="Enter your phone number"
            label="Phone:"
            forElement="phone"
            reference={refs.email}
          />
          <div className={styles.buttons}>
            <Button text="Submit" type="submit" />
            <Button text="Reset" type="reset" />
          </div>
        </form>
      )}
    </Card>
  );
}
