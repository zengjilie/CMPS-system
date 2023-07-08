import React, { useState } from "react";
import styles from "../../theme/page-styles/task.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { SurveyTaskType, SurveyType } from "../../types";
import Button from "../../components/Button/Button";
import { GetServerSideProps } from "next";
import { API } from "../../lib/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateEMOSScore } from "../../redux/slices/emoSurveySlice";

export default function EMOSurvey() {
  const userid = useSelector((state: any) => state.user.userid);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const allEMOTasks: SurveyTaskType[] = useSelector(
    (state: any) => state.emoSurvey.allTasks
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = async () => {
    //check if user answered all questions
    const isSurveyFinished =
      allEMOTasks.filter((task: SurveyTaskType) => task.score === 0).length ===
      0;

    if (!isSurveyFinished) {
      setError(true);
    } else {
      let survey: SurveyType = {
        userid,
        taskcode: "EMO",
        answer: "",
      };

      survey.answer = allEMOTasks.map((i) => i.score).join("|");

      //API
      try {
        setIsLoading(true);
        const response = await API.post({ path: "/surveys", data: survey });
        toast("成功提交问卷3!");
        setIsLoading(false);
        router.push("/anxiety-survey");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onChangeValue = (e: any) => {
    const value = Number(e.target.value);
    const survey = e.target.id.split("-")[0];
    console.log(survey);
    const id = Number(e.target.id.split("-")[2]) + 1;
    dispatch(updateEMOSScore({ taskId: id.toString(), score: value }));
  };

  return (
    <div className={styles["task-survey"]}>
      <h3>问卷3</h3>
      <br />
      <p>请根据以下陈述选择与你的实际情况最匹配的答案选项。</p>

      <div className={styles["survey"]}>
        <p></p>
        <div className={styles["survey--grid-7"]}>
          <p>非常不同意</p>
          <p>不同意</p>
          <p>有点不同意</p>
          <p>不确定</p>
          <p>有点同意</p>
          <p>同意</p>
          <p>非常同意</p>
        </div>

        {allEMOTasks.map((task: SurveyTaskType, i: number) => (
          <>
            <p className={styles["survey--task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey--grid-7"]}
              id={`emo-task-${i + 1}`}
              onChange={(e: any) => onChangeValue(e)}
            >
              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`emo-1-${i}`} name="score" value="1" />
              </div>

              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`emo-2-${i}`} name="score" value="2" />
              </div>

              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`emo-3-${i}`} name="score" value="3" />
              </div>

              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`emo-4-${i}`} name="score" value="4" />
              </div>

              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`emo-5-${i}`} name="score" value="5" />
              </div>

              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`emo-6-${i}`} name="score" value="6" />
              </div>

              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`emo-7-${i}`} name="score" value="7" />
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
        clip={true}
        isClipLoading={isLoading}
      />
      <br />
      {error && <small className={styles.error}>请回答以上所有问题!!!</small>}
    </div>
  );
}

EMOSurvey.getLayout = function getLayout(page: React.ReactNode) {
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
