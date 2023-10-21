import React from "react";
import styles from "./Entry.module.css";

function Entry() {
  return (
    <div className={styles["entry-container"]}>
      <h3>Job Title - Company</h3>
      <h4>Start Date - End Date</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et similique
        quibusdam, maiores incidunt, quae exercitationem earum soluta vel dolore
        consectetur delectus voluptate velit. Commodi, doloremque ullam!
        Necessitatibus, libero quidem. Ea ipsam facilis odit sit maiores id,
        pariatur odio nobis sed perspiciatis tempore saepe consequuntur
        quibusdam sunt quo officia consectetur architecto totam. Cumque modi
        quisquam animi labore sapiente consequatur unde!
      </p>
    </div>
  );
}

export default Entry;
