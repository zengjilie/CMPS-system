import React, { useState } from "react";
import styles from "./SideProgressBar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  DropdownRowType,
  ScrollRowType,
  TaskProgressOptionType,
  TaskProgressType,
  msTaskType,
} from "../../types";

function SideProgressBar() {
  const [submit, setSubmit] = useState(false);
  const router = useRouter();
  const taskSet: string = router.pathname.split("/")[1];
  const taskId = router.pathname.split("/").at(-1);

  const { taskOptions }: TaskProgressOptionType = useSelector(
    (state: any) => state.taskProgress[taskSet]
  );

  const textData: string = useSelector((state: any) => state.text);

  //get current data, it could be text(string), array(), or combined
  //because we need to conditionally render the submit button
  const currentData = useSelector((state: any) => {
    let data: {
      text?: string;
      ms?: msTaskType[];
      dropdowns?: DropdownRowType[];
      textA?: string;
      textB?: string;
      finalDropdown?: DropdownRowType;
      scrolls?: ScrollRowType[];
      finalScroll?: ScrollRowType;
    } = {};
    if (taskSet === "task_1") {
      switch (taskId) {
        case "1":
          data.text = state.text["task_1_1_a"];
          break;
        case "2":
          data.ms = state.ms.allMSs["ms1Task1"];
          break;
        case "3":
          data.ms = state.ms.allMSs["ms2Task1"];
          break;
        case "4":
          data.dropdowns = state.dropdowns.allDropdowns;
          break;
        case "5":
          data.dropdowns = state.dropdowns.allDropdowns;
          data.text = state.text["task_1_5_b"];
          break;
        case "6":
          data.textA = state.text["task_1_6_a"];
          data.textB = state.text["task_1_6_b"];
          data.finalDropdown = state.dropdowns.finalDropdown;
          break;
        default:
          break;
      }
    } else {
      switch (taskId) {
        case "1":
          data.text = state.text["task_2_1_a"];
        case "2":
          data.ms = state.ms.allMSs["ms1Task2"];
        case "3":
          data.ms = state.ms.allMSs["ms2Task2"];
        case "4":
          data.scrolls = state.scrolls.allScrolls;
        case "5":
          data.scrolls = state.scrolls.allSCrolls;
          data.text = state.text["task_2_5_b"];
        case "6":
          data.textA = state.text["task_2_6_a"];
          data.textB = state.text["task_2_6_b"];
          data.finalScroll = state.scrolls.finalScroll;
      }
    }
    console.log("data", data);
    return data;
  });
  console.log(currentData);
  //check the data in current task, whether it's empty
  //if empty, submit button will not be activated
  const isCurrentDataEmpty = (): boolean => {
    //check
    return true;
  };

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
              {progressChecker(task) === "unfinished" ? (
                <span className={styles["unfinished"]}>
                  <h4 className={styles["sidenav-text"]}>{task.name}</h4>
                </span>
              ) : (
                <Link
                  href={`/${taskSet}/${task.id}`}
                  className={styles[progressChecker(task)]}
                >
                  <h4 className={styles["sidenav-text"]}>{task.name}</h4>
                </Link>
              )}
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
