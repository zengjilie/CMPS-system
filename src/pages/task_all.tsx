import React, { Fragment, useState } from "react";
import styles from "../../theme/page-styles/task.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  SurveyType,
  TaskExpType,
  TaskOptionType,
} from "../../types";
import Layout from "../../components/Layout";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateTaskExpScore } from "../../redux/slices/taskExpSlice";
import { API } from "../../lib/api";
import { GetServerSideProps } from "next";

export default function TaskExp() {
  const userid = useSelector((state: any) => state.user.userid);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const { taskName, taskOptions }: TaskExpType = useSelector(
    (state: any) => state.taskExp["task_all"] || {}
  );

  const handleClick = async () => {
    // check if user answered all questions
    const unfinishedTask = taskOptions.filter(
      (task: TaskOptionType) => task.score === 0
    );
    if (unfinishedTask.length > 0) {
      setError(true);
    } else {
      //construct survey
      let survey: SurveyType = {
        userid,
        taskcode: "ALL",
        answer: "",
      };

      survey.answer = taskOptions.map((i) => i.score).join("|");

      //API
      try {
        setIsLoading(true);
        const response = await API.post({ path: "/surveys", data: survey });
        toast("成功提交问卷!");
        setIsLoading(false);
        router.push("/mpsas-survey");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onChangeValue = (e: any) => {
    const value = Number(e.target.value);
    const taskNum = Number(e.target.id.split("-")[2]);

    dispatch(
      updateTaskExpScore({ taskSet: "task_all", taskNum, score: value })
    );
  };

  return (
    <div className={styles["task-survey"]}>
      <h3>{taskName}</h3>

      <div className={styles["survey"]}>
        <p></p>
        <div className={styles["survey--grid-5"]}>
          <p>完全不同意</p>
          <p>有点不同意</p>
          <p>不确定</p>
          <p>有点同意</p>
          <p>完全同意</p>
        </div>

        {taskOptions?.map((task: TaskOptionType, i: number) => (
          <Fragment key={`taskExp-taskall-${i + 1}`}>
            <p className={styles["survey-task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey--grid-5"]}
              id={`survey-task-${i}`}
              onChange={(e: any) => onChangeValue(e)}
            >
              <div className={styles["survey--grid-5--item"]}>
                <input
                  type="radio"
                  id={`score-1-${i}`}
                  name="score"
                  value="1"
                  defaultChecked={task.score === 1 ? true : false}
                />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input
                  type="radio"
                  id={`score-2-${i}`}
                  name="score"
                  value="2"
                  defaultChecked={task.score === 2 ? true : false}
                />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input
                  type="radio"
                  id={`score-3-${i}`}
                  name="score"
                  value="3"
                  defaultChecked={task.score === 3 ? true : false}
                />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input
                  type="radio"
                  id={`score-4-${i}`}
                  name="score"
                  value="4"
                  defaultChecked={task.score === 4 ? true : false}
                />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input
                  type="radio"
                  id={`score-5-${i}`}
                  name="score"
                  value="5"
                  defaultChecked={task.score === 5 ? true : false}
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
        clip={true}
        isClipLoading={isLoading}
      />
      <br />
      {error && <small className={styles.error}>请回答以上所有问题!!!</small>}
    </div>
  );
}

TaskExp.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cmpsToken = req.cookies["cmpsToken"];
  if (!cmpsToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
};
