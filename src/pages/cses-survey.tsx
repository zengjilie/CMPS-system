import React, { useState } from "react";
import styles from "../../theme/page-styles/task.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { csesTaskType } from "../../types";
import Button from "../../components/Button/Button";
import { updateCSESScore } from "../../redux/slices/csesSlice";
import { GetServerSideProps } from "next";

export default function CSESsurvey() {
  const [error, setError] = useState<boolean>(false);
  const allTasks = useSelector((state: any) => state.cses.allTasks);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    //check if user answered all questions
    const unfinishedTask = allTasks.filter(
      (task: csesTaskType) => task.score === 0
    );

    if (unfinishedTask.length > 0) {
      setError(true);
    } else {
      router.push("/task1");
    }
  };

  const onChangeValue = (e: any) => {
    const value = Number(e.target.value);
    const id = Number(e.target.id.split("-")[2]) + 1;

    dispatch(updateCSESScore({ taskId: id.toString(), score: value }));
  };

  return (
    <div className={styles["task-survey"]}>
      <h3>请完成以下量表</h3>
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

        {allTasks.map((task: csesTaskType, i: number) => (
          <>
            <p className={styles["survey-task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey-options"]}
              id={`survey-task-${i + 1}`}
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
          </>
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

CSESsurvey.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cmpsToken = req.cookies["cmpsToken"];
  if (!cmpsToken) {
    console.log("none");
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
};