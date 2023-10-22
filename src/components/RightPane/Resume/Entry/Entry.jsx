import React from "react";
import styles from "./Entry.module.css";

function Entry({ title, company, startDate, endDate, description }) {
  // Reusable Entry component
  return (
    <div className={styles["entry-container"]}>
      <h3>
        {title} - {company}
      </h3>
      <h4>
        {startDate} - {endDate}
      </h4>
      <p>{description}</p>
    </div>
  );
}

export default Entry;
