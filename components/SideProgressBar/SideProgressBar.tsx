import React, { useState } from "react";
import styles from "./SideProgressBar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  CurrentDataType,
  TaskIdType,
  TaskProgressOptionType,
  TaskProgressState,
  TaskSetType,
} from "../../types";
import Button from "../Button/Button";
import { isCurrentDataEmpty } from "./emptyChecker";
import { finishTask } from "../../redux/slices/taskProgressSlice";
import FinishTaskModal from "../Modals/FinishTaskModal/FinishTaskModal";
import { toggleFTModal } from "../../redux/slices/modalSlice";

function SideProgressBar() {
  const router = useRouter();
  const taskSet: TaskSetType = router.pathname.split("/")[1] as TaskSetType;
  const taskId: TaskIdType = router.pathname.split("/").at(-1) as TaskIdType;
  const { taskOptions }: TaskProgressOptionType = useSelector(
    (state: any) => state.taskProgress[taskSet]
  );
  const currentTask = taskOptions[Number(taskId) - 1];
  const dispatch = useDispatch();

  //get current data, it could be text(string), array(), or combined
  //because we need to conditionally render the submit button
  const currentData = useSelector((state: any) => {
    let data: CurrentDataType = {};
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
    } else if (taskSet === "task_2") {
      switch (taskId) {
        case "1":
          data.text = state.text["task_2_1_a"];
          break;
        case "2":
          data.ms = state.ms.allMSs["ms1Task2"];
          break;
        case "3":
          data.ms = state.ms.allMSs["ms2Task2"];
          break;
        case "4":
          data.scrolls = state.scrolls.allScrolls;
          break;
        case "5":
          data.scrolls = state.scrolls.allScrolls;
          data.text = state.text["task_2_5_b"];
          break;
        case "6":
          data.textA = state.text["task_2_6_a"];
          data.textB = state.text["task_2_6_b"];
          data.finalScroll = state.scrolls.finalScroll;
          break;
        default:
          break;
      }
    }
    return data;
  });

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

  const submitHandler = () => {
    //redux set task state
    dispatch(finishTask({ taskSet, taskId }));
  };

  const nextUrlHandler = () => {
    let nextUrl: string = "";
    nextUrl = `/${taskSet}/${Number(taskId) + 1}`;
    router.push(nextUrl);
  };

  return (
    <>
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
            <Button
              click={submitHandler}
              text="提交"
              type={
                isCurrentDataEmpty(taskId, currentData) ? "inactive" : "primary"
              }
            />
            <Button
              click={() =>
                taskId === "6" ? dispatch(toggleFTModal()) : nextUrlHandler()
              }
              text={taskId === "6" ? "结束作答" : "下一题"}
              type={currentTask.finished ? "primary" : "inactive"}
            />
          </div>
        </div>
      </div>
      <FinishTaskModal />
    </>
  );
}

export default SideProgressBar;
