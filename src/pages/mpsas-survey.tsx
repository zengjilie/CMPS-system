import React, { Fragment, useState } from "react";
import styles from "../../theme/page-styles/task.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { mpsasTaskType } from "../../types";
import { useRouter } from "next/router";
import { updateMPSASScore } from "../../redux/slices/mpsasSlice";
import Layout from "../../components/Layout";
import Button from "../../components/Button/Button";

export default function MPSASSurvey() {
  const [error, setError] = useState<boolean>(false);
  const allTasks: mpsasTaskType[] = useSelector(
    (state: any) => state.mpsas?.allTasks
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    //check if user answered all questions
    const unfinishedTask = allTasks.filter(
      (task: mpsasTaskType) => task.score === 0
    );

    if (unfinishedTask.length > 0) {
      setError(true);
    } else {
      router.push("/thankyou");
    }
  };

  const onChangeValue = (e: any) => {
    const value = Number(e.target.value);
    const id = Number(e.target.id.split("-")[2]) + 1;

    dispatch(updateMPSASScore({ taskId: id.toString(), score: value }));
  };

  return (
    <div className={styles["task-survey"]}>
      <h3>创造性数学问题解决属性量表</h3>
      <br />
      <p>
        同学，你好！此问卷调查的是你在解决问题方面的实际情况。请你认真阅读每个句子，然后选择最符合你真实情况的词语，你的答案没有对错之分。
      </p>
      <div className={styles["survey"]}>
        <p></p>
        <div className={styles["survey-scale"]}>
          <p>几乎不</p>
          <p>很少</p>
          <p>有时</p>
          <p>经常</p>
          <p>常常</p>
        </div>

        {allTasks?.map((task: mpsasTaskType, i: number) => (
          <Fragment key={`taskExp-taskall-${i + 1}`}>
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

MPSASSurvey.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
