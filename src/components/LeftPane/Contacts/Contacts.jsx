import React, { useState, useRef, useContext } from "react";
import Button from "../../UI/Button/Button";
import styles from "./Contacts.module.css";
import Input from "../../UI/Input/Input";
import Card from "../../UI/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ResumeContext from "../../Contexts/ResumeContext";

export default function Contacts() {
  // setting arrow clicked state and rendering the card components when the arrow is clicked
  const [arrowClicked, setArrowClicked] = useState(false);
  const updateResumeData = useContext(ResumeContext); // getting ResumeContext state changer to update the contact state

  // defining refs to capture the input element data
  const refs = {
    name: useRef(null),
    email: useRef(null),
    phone: useRef(null),
  };

  const clickHandler = () => {
    setArrowClicked((prevState) => !prevState);
  };

  // adding formSubmitHandler which updates the state based on provided input values
  const formSubmitHandler = (event) => {
    event.preventDefault();

    //checking the first empty ref and focusing on that
    for (let key in refs) {
      if (refs[key].current && !refs[key].current.value) {
        refs[key].current.focus();
        return;
      }
    }

    // updating the state
    updateResumeData((prevState) => ({
      ...prevState,
      contact: {
        name: refs.name.current.value,
        email: refs.email.current.value,
        phone: refs.phone.current.value,
      },
    }));

    // resetting the input refs
    refs.name.current.value = "";
    refs.email.current.value = "";
    refs.phone.current.value = "";
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
        <form className={styles["contacts-form"]} onSubmit={formSubmitHandler}>
          <h3>Enter your contact details</h3>
          <Input
            type="text"
            placeholder="Enter your name"
            label="Name:"
            forElement="name"
            ref={refs.name}
          />
          <Input
            type="email"
            placeholder="Enter your email"
            label="Email:"
            forElement="email"
            ref={refs.email}
          />
          <Input
            type="tel"
            placeholder="Enter your phone number"
            label="Phone:"
            forElement="phone"
            ref={refs.phone}
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
