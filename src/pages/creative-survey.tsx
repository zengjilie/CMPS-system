import React, { useState } from "react";
import styles from "../../theme/page-styles/task.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { SurveyTaskType, SurveyType } from "../../types";
import Button from "../../components/Button/Button";
import { updateCSESScore } from "../../redux/slices/cseSurveySlice";
import { GetServerSideProps } from "next";
import { updateCTSScore } from "../../redux/slices/ctSurveySlice";
import { updateCMSScore } from "../../redux/slices/cmSurveySlice";
import { API } from "../../lib/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CSsurvey() {
  const userid = useSelector((state: any) => state.user.userid);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const allCSETasks: SurveyTaskType[] = useSelector(
    (state: any) => state.cseSurvey.allTasks
  );
  const allCTTasks: SurveyTaskType[] = useSelector(
    (state: any) => state.ctSurvey.allTasks
  );
  const allCMTasks: SurveyTaskType[] = useSelector(
    (state: any) => state.cmSurvey.allTasks
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = async () => {
    //check if user answered all questions
    const isSurveyFinished =
      allCSETasks.filter((task: SurveyTaskType) => task.score === 0).length ===
        0 &&
      allCTTasks.filter((task: SurveyTaskType) => task.score === 0).length ===
        0 &&
      allCMTasks.filter((task: SurveyTaskType) => task.score === 0).length ===
        0;

    if (!isSurveyFinished) {
      setError(true);
    } else {
      let survey: SurveyType = {
        userid,
        taskcode: "CSTM",
        answer: "",
      };

      const cseAnswer = allCSETasks.map((i) => i.score).join("|");
      const ctAnswer = allCTTasks.map((i) => i.score).join("|");
      const cmAnswer = allCMTasks.map((i) => i.score).join("|");
      survey.answer = cseAnswer + "-" + ctAnswer + "-" + cmAnswer;

      //API
      try {
        setIsLoading(true);
        const response = await API.post({ path: "/surveys", data: survey });
        toast("成功提交问卷1!");
        setIsLoading(false);
        router.push("/achievement-survey");
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
    if (survey === "cse") {
      dispatch(updateCSESScore({ taskId: id.toString(), score: value }));
    }
    if (survey === "ct") {
      dispatch(updateCTSScore({ taskId: id.toString(), score: value }));
    }
    if (survey === "cm") {
      dispatch(updateCMSScore({ taskId: id.toString(), score: value }));
    }
  };

  return (
    <div className={styles["task-survey"]}>
      <h3>问卷1</h3>
      <br />
      <p>请根据你的真实想法选择，你的答案没有对错之分。</p>

      <div className={styles["survey"]}>
        <p></p>
        <div className={styles["survey--grid-5"]}>
          <p>非常不同意</p>
          <p>不同意</p>
          <p>不确定</p>
          <p>同意</p>
          <p>非常同意</p>
        </div>

        {allCSETasks.map((task: SurveyTaskType, i: number) => (
          <>
            <p className={styles["survey--task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey--grid-5"]}
              id={`cse-task-${i + 1}`}
              onChange={(e: any) => onChangeValue(e)}
            >
              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`cse-1-${i}`} name="score" value="1" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`cse-2-${i}`} name="score" value="2" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`cse-3-${i}`} name="score" value="3" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`cse-4-${i}`} name="score" value="4" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`cse-5-${i}`} name="score" value="5" />
              </div>
            </form>
          </>
        ))}
      </div>

      <hr />

      <div className={styles["survey"]}>
        <p></p>
        <div className={styles["survey--grid-5"]}>
          <p>非常不同意</p>
          <p>不同意</p>
          <p>不确定</p>
          <p>同意</p>
          <p>非常同意</p>
        </div>

        {allCTTasks.map((task: SurveyTaskType, i: number) => (
          <>
            <p className={styles["survey--task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey--grid-5"]}
              id={`ct-task-${i + 1}`}
              onChange={(e: any) => onChangeValue(e)}
            >
              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`ct-1-${i}`} name="score" value="1" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`ct-2-${i}`} name="score" value="2" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`ct-3-${i}`} name="score" value="3" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`ct-4-${i}`} name="score" value="4" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`ct-5-${i}`} name="score" value="5" />
              </div>
            </form>
          </>
        ))}
      </div>

      <hr />

      <div className={styles["survey"]}>
        <p></p>
        <div className={styles["survey--grid-6"]}>
          <p>强烈不同意</p>
          <p>不同意</p>
          <p>有点不同意</p>
          <p>有点同意</p>
          <p>同意</p>
          <p>完全同意</p>
        </div>

        {allCMTasks.map((task: SurveyTaskType, i: number) => (
          <>
            <p className={styles["survey--task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey--grid-6"]}
              id={`cm-task-${i + 1}`}
              onChange={(e: any) => onChangeValue(e)}
            >
              <div className={styles["survey--grid-6--item"]}>
                <input type="radio" id={`cm-1-${i}`} name="score" value="1" />
              </div>

              <div className={styles["survey--grid-6--item"]}>
                <input type="radio" id={`cm-2-${i}`} name="score" value="2" />
              </div>

              <div className={styles["survey--grid-6--item"]}>
                <input type="radio" id={`cm-3-${i}`} name="score" value="3" />
              </div>

              <div className={styles["survey--grid-6--item"]}>
                <input type="radio" id={`cm-4-${i}`} name="score" value="4" />
              </div>

              <div className={styles["survey--grid-6--item"]}>
                <input type="radio" id={`cm-5-${i}`} name="score" value="5" />
              </div>

              <div className={styles["survey--grid-6--item"]}>
                <input type="radio" id={`cm-6-${i}`} name="score" value="6" />
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

CSsurvey.getLayout = function getLayout(page: React.ReactNode) {
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
