import Head from "next/head";
import React from "react";
import styles from "../../../theme/page-styles/task.module.scss";
import Button from "../../../components/Button/Button";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

export default function Task1Intro() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/task_2/1");
  };

  return (
    <>
      <Head>
        <title>CMPS | Task2 Intro</title>
      </Head>
      <div className={styles["task-intro"]}>
        <h4>
          &nbsp; &nbsp; &nbsp; &nbsp;
          露营是一种短时的户外生活方式，能够满足人们“回归自然、返璞归真”的需求与愿望，为游人提供休息、保健、娱乐、休闲等服务。目前，露营已经成为户外游憩的一种重要形式。
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;
          班主任计划带全班同学去露营，请你围绕这一背景完成本次测试。本次测试包含6道题目，请点击下一步按钮进行作答。
        </h4>
        <Button
          className={styles["task-intro-btn"]}
          click={handleClick}
          text="下一步"
          type="primary"
        />
      </div>
    </>
  );
}

Task1Intro.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
