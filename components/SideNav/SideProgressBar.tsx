import React, { useState } from "react";
import styles from "./SideNav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

function SideProgressBar() {
  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  const path = router.asPath;
  // when click submit, check if this task is already finished, if true it means you are modify your answer, modal pops up

  // false redux data
  const tasks = {
    task1: {
      finished: true,
      current: false,
      name: "问题一",
    },
    task2: {
      finished: false,
      current: true,
      name: "问题二",
    },
    task3: {
      finished: false,
      current: false,
      name: "问题三",
    },
  };

  //check the progress of each task
  const progressChecker = (task: any) => {
    if (task.current === true) {
      return "current";
    }

    if (task.finished === true) {
      return "finished";
    } else {
      return "unfinished";
    }
  };

  // read from redux
  // check if user has finished task 1,2,3...

  // check which task the user is currently working on

  // check which tasks the user haven't done

  // check if user make a selection or have input

  // check if submited is set to true

  const submitHandler = () => {
    //redux set task state
    //fnished true
    //update database
  };

  const nextHandler = () => {
    //redux set task state
    //current false
    //jump to next task
  };
  return (
    <div className={styles["sidenav-bar"]}>
      <div className={styles["sidenav-header"]}>
        <h4>答题进度条</h4>
      </div>

      <div className={styles["sidenav-controller"]}>
        <ul className={styles["sidenav-items"]}>
          <li>
            <Link href="/task1">
              <h4
                className={`${styles["sidenav-text"]} ${
                  styles[progressChecker(tasks.task1)]
                }`}
              >
                {tasks.task1.name}
              </h4>
            </Link>
          </li>

          <li>
            <Link href="/task2">
              <h4
                className={`${styles["sidenav-text"]} ${
                  styles[progressChecker(tasks.task2)]
                }`}
              >
                {tasks.task2.name}
              </h4>
            </Link>
          </li>

          <li>
            <Link href="/task3">
              <h4
                className={`${styles["sidenav-text"]} ${
                  styles[progressChecker(tasks.task3)]
                }`}
              >
                {tasks.task3.name}
              </h4>
            </Link>
          </li>
        </ul>

        <div className={styles["sidenav-btns"]}>
          <button
            className={`${styles["sidenav-btn"]} ${styles["inactive"]}`}
            onClick={submitHandler}
          >
            提交
          </button>
          <button
            className={`${styles["sidenav-btn"]} ${styles["inactive"]}`}
            onClick={nextHandler}
          >
            下一题
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideProgressBar;
