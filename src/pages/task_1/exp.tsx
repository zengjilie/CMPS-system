import React, { Fragment, useState } from "react";
import styles from "../../../theme/page-styles/task.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { TaskExpState, TaskExpType, TaskOptionType } from "../../../types";
import Layout from "../../../components/Layout";
import Button from "../../../components/Button/Button";
import { updateTaskExpScore } from "../../../redux/slices/taskExpSlice";

export default function TaskExp() {
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();
  const path: string = router.asPath;
  const taskId: keyof TaskExpState = path.split("/")[1] as keyof TaskExpState;
  const dispatch = useDispatch();

  const { taskName, taskOptions }: TaskExpType = useSelector(
    (state: any) => state.taskExp[taskId] || {}
  );

  const getNextTaskUrl = (): string => {
    if (taskId === "task_1") {
      return "/task_2";
    } else if (taskId === "task_2") {
      return "task_all";
    }
    return "";
  };

  const handleClick = () => {
    // check if user answered all questions
    const unfinishedTask = taskOptions.filter(
      (task: TaskOptionType) => task.score === 0
    );
    if (unfinishedTask.length > 0) {
      setError(true);
    } else {
      router.push(getNextTaskUrl());
    }
  };

  const onChangeValue = (e: any) => {
    const value = Number(e.target.value);
    const taskNum = Number(e.target.id.split("-")[2]);

    dispatch(updateTaskExpScore({ taskId, taskNum, score: value }));
  };

  return (
    <div className={styles["task-survey"]}>
      <h3>{taskName}</h3>
      <br />
      <p>
        同学，你好！此问卷调查的是你在解决问题方面的实际情况。请你认真阅读每个句子，然后选择最符合你真实情况的词语，你的答案没有对错之分。
      </p>
      <div className={styles["survey"]}>
        <p></p>
        <div className={styles["survey-scale"]}>
          <p>完全不同意</p>
          <p>有点不同意</p>
          <p>不确定</p>
          <p>有点同意</p>
          <p>完全同意</p>
        </div>

        {taskOptions?.map((task: TaskOptionType, i: number) => (
          <Fragment key={`taskExp-${taskId}-${i + 1}`}>
            <p className={styles["survey-task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey-options"]}
              id={`survey-task-${i}`}
              onChange={(e: any) => onChangeValue(e)}
            >
              <div className={styles["survey-option"]}>
                <input
                  type="radio"
                  id={`score-1-${i}`}
                  name="score"
                  value="1"
                />
              </div>

              <div className={styles["survey-option"]}>
                <input
                  type="radio"
                  id={`score-2-${i}`}
                  name="score"
                  value="2"
                />
              </div>

              <div className={styles["survey-option"]}>
                <input
                  type="radio"
                  id={`score-3-${i}`}
                  name="score"
                  value="3"
                />
              </div>

              <div className={styles["survey-option"]}>
                <input
                  type="radio"
                  id={`score-4-${i}`}
                  name="score"
                  value="4"
                />
              </div>

              <div className={styles["survey-option"]}>
                <input
                  type="radio"
                  id={`score-5-${i}`}
                  name="score"
                  value="5"
                />
              </div>
            </form>
          </Fragment>
        ))}
      </div>
      <Button
        className={styles["survey-btn"]}
        click={handleClick}
        text="提交"
        type="primary"
      />
      <br />
      {error && <small className={styles.error}>请回答以上所有问题!!!</small>}
    </div>
  );
}

TaskExp.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
