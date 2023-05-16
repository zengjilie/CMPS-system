import React, { Fragment, useState } from "react";
import styles from "../../theme/page-styles/task.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { SurveyType, mpsasTaskType } from "../../types";
import { useRouter } from "next/router";
import { updateMPSASScore } from "../../redux/slices/mpsasSlice";
import Layout from "../../components/Layout";
import Button from "../../components/Button/Button";
import { API } from "../../lib/api";
import { GetServerSideProps } from "next";

export default function MPSASSurvey() {
  const userid = useSelector((state: any) => state.user.userid);
  const [error, setError] = useState<boolean>(false);
  const allTasks: mpsasTaskType[] = useSelector(
    (state: any) => state.mpsas?.allTasks
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = async () => {
    //check if user answered all questions
    const unfinishedTask = allTasks.filter(
      (task: mpsasTaskType) => task.score === 0
    );

    if (unfinishedTask.length > 0) {
      setError(true);
    } else {
      //construct survey
      let survey: SurveyType = {
        userid,
        taskcode: "MPSAS",
        answer: "",
      };

      survey.answer = allTasks.map((i) => i.score).join("|");

      //API
      const response = await API.post({ path: "/surveys", data: survey });

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
                  defaultChecked={task.score === 1 ? true : false}
                />
              </div>

              <div className={styles["survey-option"]}>
                <input
                  type="radio"
                  id={`score-2-${i}`}
                  name="score"
                  value="2"
                  defaultChecked={task.score === 2 ? true : false}
                />
              </div>

              <div className={styles["survey-option"]}>
                <input
                  type="radio"
                  id={`score-3-${i}`}
                  name="score"
                  value="3"
                  defaultChecked={task.score === 3 ? true : false}
                />
              </div>

              <div className={styles["survey-option"]}>
                <input
                  type="radio"
                  id={`score-4-${i}`}
                  name="score"
                  value="4"
                  defaultChecked={task.score === 4 ? true : false}
                />
              </div>

              <div className={styles["survey-option"]}>
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
      />
      <br />
      {error && <small className={styles.error}>请回答以上所有问题!!!</small>}
    </div>
  );
}

MPSASSurvey.getLayout = function getLayout(page: React.ReactNode) {
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
