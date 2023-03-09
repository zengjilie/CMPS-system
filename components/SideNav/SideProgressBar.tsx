import React from "react";
import styles from "./SideNav.module.scss";

function SideProgressBar() {
  // false redux data
  const tasks = {
    task1: {
      finished: true,
      current: false,
    },
    task2: {
      finished: false,
      current: true,
    },
    task3: {
      finished: false,
      current: false,
    },
  };
  // finished -> blue
  // unfinished -> grey bold
  // current -> light grey

  // read from redux
  // check if user has finished task 1,2,3...

  // check which task the user is currently working on

  // check which tasks the user haven't done

  //
  return (
    <div className={styles["side-bar"]}>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default SideProgressBar;
