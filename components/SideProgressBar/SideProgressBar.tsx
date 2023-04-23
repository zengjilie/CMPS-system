import React, { useState } from "react";
import styles from "./SideProgressBar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { TaskProgressOptionType, TaskProgressType } from "../../types";

function SideProgressBar() {
  const [submit, setSubmit] = useState(false);
  const router = useRouter();
  const taskSet = router.pathname.split("/")[1];
  const taskId = router.pathname.split("/").at(-1);

  const { taskName, taskOptions }: TaskProgressOptionType = useSelector(
    (state: any) => state.taskProgress[taskSet]
  );

  console.log(taskSet, taskId);
  // when click submit, check if this task is already finished, if true it means you are modify your answer, modal pops up

  //check the progress of each task
  const progressChecker = (task: any) => {
    if (task.id === taskId) {
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

  const getNextUrl = () => {};
  const nextUrlHandler = () => {
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
          {taskOptions.map((task, i) => (
            <li key={i}>
              <Link href={`/${taskSet}/${task.id}`}>
                <h4
                  className={`${styles["sidenav-text"]} ${
                    styles[progressChecker(task)]
                  }`}
                >
                  {task.name}
                </h4>
              </Link>
            </li>
          ))}
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
            onClick={nextUrlHandler}
          >
            下一题
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideProgressBar;
