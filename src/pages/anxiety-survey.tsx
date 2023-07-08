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
import { updatePASScore } from "../../redux/slices/paSurveySlice";
import { updateMASScore } from "../../redux/slices/maSurveySlice";
import { updateSASScore } from "../../redux/slices/saSurveySlice";
import { updateAPSScore } from "../../redux/slices/apSurveySlice";

export default function AnxietySurvey() {
  const userid = useSelector((state: any) => state.user.userid);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const allSATasks: SurveyTaskType[] = useSelector(
    (state: any) => state.saSurvey.allTasks
  );
  const allPATasks: SurveyTaskType[] = useSelector(
    (state: any) => state.paSurvey.allTasks
  );
  const allMATasks: SurveyTaskType[] = useSelector(
    (state: any) => state.maSurvey.allTasks
  );
  const allAPTasks: SurveyTaskType[] = useSelector(
    (state: any) => state.apSurvey.allTasks
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = async () => {
    //check if user answered all questions
    const isSurveyFinished =
      allSATasks.filter((task: SurveyTaskType) => task.score === 0).length ===
        0 &&
      allPATasks.filter((task: SurveyTaskType) => task.score === 0).length ===
        0 &&
      allMATasks.filter((task: SurveyTaskType) => task.score === 0).length ===
        0 &&
      allAPTasks.filter((task: SurveyTaskType) => task.score === 0).length ===
        0;

    if (!isSurveyFinished) {
      setError(true);
    } else {
      let survey: SurveyType = {
        userid,
        taskcode: "AAP",
        answer: "",
      };

      const saAnswer = allSATasks.map((i) => i.score).join("|");
      const paAnswer = allPATasks.map((i) => i.score).join("|");
      const maAnswer = allMATasks.map((i) => i.score).join("|");
      const apAnswer = allAPTasks.map((i) => i.score).join("|");
      survey.answer =
        saAnswer + "-" + paAnswer + "-" + maAnswer + "-" + apAnswer;

      //API
      try {
        setIsLoading(true);
        const response = await API.post({ path: "/surveys", data: survey });
        toast("成功提交问卷4!");
        setIsLoading(false);
        router.push("/study-survey");
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

    if (survey === "sa") {
      dispatch(updateSASScore({ taskId: id.toString(), score: value }));
    }
    if (survey === "pa") {
      dispatch(updatePASScore({ taskId: id.toString(), score: value }));
    }
    if (survey === "ma") {
      dispatch(updateMASScore({ taskId: id.toString(), score: value }));
    }
    if (survey === "ap") {
      dispatch(updateAPSScore({ taskId: id.toString(), score: value }));
    }
  };

  return (
    <div className={styles["task-survey"]}>
      <h3>问卷4</h3>
      <br />
      <p>请选择最合适描述你此时此刻感受的选项。</p>

      <div className={styles["survey"]}>
        <p></p>
        <div className={styles["survey--grid-4"]}>
          <p>完全没有</p>
          <p>有一些</p>
          <p>中等程度</p>
          <p>非常明显</p>
        </div>

        {allSATasks.map((task: SurveyTaskType, i: number) => (
          <>
            <p className={styles["survey--task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey--grid-4"]}
              id={`sa-task-${i + 1}`}
              onChange={(e: any) => onChangeValue(e)}
            >
              <div className={styles["survey--grid-4--item"]}>
                <input type="radio" id={`sa-1-${i}`} name="score" value="1" />
              </div>

              <div className={styles["survey--grid-4--item"]}>
                <input type="radio" id={`sa-2-${i}`} name="score" value="2" />
              </div>

              <div className={styles["survey--grid-4--item"]}>
                <input type="radio" id={`sa-3-${i}`} name="score" value="3" />
              </div>

              <div className={styles["survey--grid-4--item"]}>
                <input type="radio" id={`sa-4-${i}`} name="score" value="4" />
              </div>
            </form>
          </>
        ))}
      </div>

      <hr />
      <p>请选择最合适描述你平时感觉（经常有的感觉）的选项。</p>
      <div className={styles["survey"]}>
        <p></p>
        <div className={styles["survey--grid-4"]}>
          <p>几乎没有</p>
          <p>偶尔</p>
          <p>经常</p>
          <p>几乎总是如此</p>
        </div>

        {allPATasks.map((task: SurveyTaskType, i: number) => (
          <>
            <p className={styles["survey--task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey--grid-4"]}
              id={`pa-task-${i + 1}`}
              onChange={(e: any) => onChangeValue(e)}
            >
              <div className={styles["survey--grid-4--item"]}>
                <input type="radio" id={`pa-1-${i}`} name="score" value="1" />
              </div>

              <div className={styles["survey--grid-4--item"]}>
                <input type="radio" id={`pa-2-${i}`} name="score" value="2" />
              </div>

              <div className={styles["survey--grid-4--item"]}>
                <input type="radio" id={`pa-3-${i}`} name="score" value="3" />
              </div>

              <div className={styles["survey--grid-4--item"]}>
                <input type="radio" id={`pa-4-${i}`} name="score" value="4" />
              </div>
            </form>
          </>
        ))}
      </div>

      <hr />
      <p>请选择当面对以下情况时最符合你实际情况的选项。</p>
      <div className={styles["survey"]}>
        <p></p>
        <div className={styles["survey--grid-4"]}>
          <p>几乎没有</p>
          <p>偶尔</p>
          <p>经常</p>
          <p>几乎总是如此</p>
        </div>

        {allMATasks.map((task: SurveyTaskType, i: number) => (
          <>
            <p className={styles["survey--task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey--grid-4"]}
              id={`ma-task-${i + 1}`}
              onChange={(e: any) => onChangeValue(e)}
            >
              <div className={styles["survey--grid-4--item"]}>
                <input type="radio" id={`ma-1-${i}`} name="score" value="1" />
              </div>

              <div className={styles["survey--grid-4--item"]}>
                <input type="radio" id={`ma-2-${i}`} name="score" value="2" />
              </div>

              <div className={styles["survey--grid-4--item"]}>
                <input type="radio" id={`ma-3-${i}`} name="score" value="3" />
              </div>

              <div className={styles["survey--grid-4--item"]}>
                <input type="radio" id={`ma-4-${i}`} name="score" value="4" />
              </div>
            </form>
          </>
        ))}
      </div>

      <hr />

      <p>请选择最符合你实际情况的选项。</p>
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

        {allAPTasks.map((task: SurveyTaskType, i: number) => (
          <>
            <p className={styles["survey--task-name"]}>{`${i + 1}.${
              task.name
            }`}</p>
            <form
              className={styles["survey--grid-7"]}
              id={`ap-task-${i + 1}`}
              onChange={(e: any) => onChangeValue(e)}
            >
              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`ap-1-${i}`} name="score" value="1" />
              </div>

              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`ap-2-${i}`} name="score" value="2" />
              </div>

              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`ap-3-${i}`} name="score" value="3" />
              </div>

              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`ap-4-${i}`} name="score" value="4" />
              </div>

              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`ap-5-${i}`} name="score" value="5" />
              </div>

              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`ap-6-${i}`} name="score" value="6" />
              </div>

              <div className={styles["survey--grid-7--item"]}>
                <input type="radio" id={`ap-7-${i}`} name="score" value="7" />
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
