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
import { updateSFSScore } from "../../redux/slices/sfSurveySlice";
import { updateTSRSScore } from "../../redux/slices/tsrSurveySlice";
import { updateCATOSScore } from "../../redux/slices/catoSurveySlice";
import { useForm } from "../../lib/hooks/useForm";

export default function AnxietySurvey() {
  const userid = useSelector((state: any) => state.user.userid);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { inputs, handleChange } = useForm({
    mathScore: "",
    chineseScore: "",
  });

  const allSFTasks: SurveyTaskType[] = useSelector(
    (state: any) => state.sfSurvey.allTasks
  );
  const allTSRTasks: SurveyTaskType[] = useSelector(
    (state: any) => state.tsrSurvey.allTasks
  );
  const allCATOTasks: SurveyTaskType[] = useSelector(
    (state: any) => state.catoSurvey.allTasks
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = async () => {
    //check if user answered all questions
    const isSurveyFinished =
      allSFTasks.filter((task: SurveyTaskType) => task.score === 0).length ===
        0 &&
      allTSRTasks.filter((task: SurveyTaskType) => task.score === 0).length ===
        0 &&
      allCATOTasks.filter((task: SurveyTaskType) => task.score === 0).length ===
        0;

    if (!isSurveyFinished && !inputs.mathScore && !inputs.chineseScore) {
      setError(true);
    } else {
      let survey: SurveyType = {
        userid,
        taskcode: "STSR",
        answer: "",
      };

      const sfAnswer = allSFTasks.map((i) => i.score).join("|");
      const tsrAnswer = allTSRTasks.map((i) => i.score).join("|");
      const catoAnswer = allCATOTasks.map((i) => i.score).join("|");

      survey.answer =
        sfAnswer +
        "-" +
        tsrAnswer +
        "-" +
        catoAnswer +
        "-" +
        inputs.mathScore +
        "-" +
        inputs.chineseScore;

      //API
      try {
        setIsLoading(true);
        const response = await API.post({ path: "/surveys", data: survey });
        toast("成功提交问卷5!");
        setIsLoading(false);
        router.push("/thankyou");
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

    if (survey === "sf") {
      dispatch(updateSFSScore({ taskId: id.toString(), score: value }));
    }
    if (survey === "tsr") {
      dispatch(updateTSRSScore({ taskId: id.toString(), score: value }));
    }
    if (survey === "cato") {
      dispatch(updateCATOSScore({ taskId: id.toString(), score: value }));
    }
  };

  return (
    <div className={styles["task-survey"]}>
      <h3>问卷5</h3>
      <br />
      <p>请根据你对数学课的实际感受，选择最符合你实际情况的选项。</p>

      <div className={styles["survey"]}>
        <p></p>
        <div className={styles["survey--grid-5"]}>
          <p>完全不符合</p>
          <p>比较不符合</p>
          <p>不确定</p>
          <p>比较符合</p>
          <p>完全符合</p>
        </div>

        {allSFTasks.map((task: SurveyTaskType, i: number) => (
          <>
            <p className={styles["survey--task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey--grid-5"]}
              id={`sf-task-${i + 1}`}
              onChange={(e: any) => onChangeValue(e)}
            >
              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`sf-1-${i}`} name="score" value="1" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`sf-2-${i}`} name="score" value="2" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`sf-3-${i}`} name="score" value="3" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`sf-4-${i}`} name="score" value="4" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`sf-5-${i}`} name="score" value="5" />
              </div>
            </form>
          </>
        ))}
      </div>

      <hr />

      <p>请根据你对数学老师的实际感受，选择最符合你实际情况的选项。</p>
      <div className={styles["survey"]}>
        <p></p>
        <div className={styles["survey--grid-5"]}>
          <p>完全不符合</p>
          <p>比较不符合</p>
          <p>不确定</p>
          <p>比较符合</p>
          <p>完全符合</p>
        </div>

        {allTSRTasks.map((task: SurveyTaskType, i: number) => (
          <>
            <p className={styles["survey--task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey--grid-5"]}
              id={`tsr-task-${i + 1}`}
              onChange={(e: any) => onChangeValue(e)}
            >
              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`tsr-1-${i}`} name="score" value="1" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`tsr-2-${i}`} name="score" value="2" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`tsr-3-${i}`} name="score" value="3" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`tsr-4-${i}`} name="score" value="4" />
              </div>

              <div className={styles["survey--grid-6--item"]}>
                <input type="radio" id={`tsr-5-${i}`} name="score" value="5" />
              </div>
            </form>
          </>
        ))}
      </div>

      <hr />

      <p>请根据你的实际感受，选择最符合你实际情况的选项。</p>
      <div className={styles["survey"]}>
        <p></p>
        <div className={styles["survey--grid-5"]}>
          <p>完全不符合</p>
          <p>比较不符合</p>
          <p>不确定</p>
          <p>比较符合</p>
          <p>完全符合</p>
        </div>

        {allCATOTasks.map((task: SurveyTaskType, i: number) => (
          <>
            <p className={styles["survey--task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey--grid-5"]}
              id={`cato-task-${i + 1}`}
              onChange={(e: any) => onChangeValue(e)}
            >
              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`cato-1-${i}`} name="score" value="1" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`cato-2-${i}`} name="score" value="2" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`cato-3-${i}`} name="score" value="3" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`cato-4-${i}`} name="score" value="4" />
              </div>

              <div className={styles["survey--grid-5--item"]}>
                <input type="radio" id={`cato-5-${i}`} name="score" value="5" />
              </div>
            </form>
          </>
        ))}
      </div>

      <hr />

      <label htmlFor="math-score">最近一次数学考试的成绩(期中)</label>
      <input
        type="text"
        id="math-score"
        name="mathScore"
        placeholder="请输入最近一次数学成绩"
        value={inputs.mathScore}
        onChange={handleChange}
      />

      <hr />

      <label htmlFor="chinese-score">最近一次语文考试的成绩(期中)</label>
      <input
        type="text"
        id="chinese-score"
        name="chineseScore"
        placeholder="请输入最近一次语文成绩"
        value={inputs.chineseScore}
        onChange={handleChange}
      />

      <hr />

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

AnxietySurvey.getLayout = function getLayout(page: React.ReactNode) {
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
