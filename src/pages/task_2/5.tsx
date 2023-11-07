import React from "react";
import Layout from "../../../components/Layout";
import styles from "../../../theme/page-styles/task.module.scss";
import TextInput from "../../../components/TextInput/TextInput";
import ScrollMenuController from "../../../components/ScrollMenuController/ScrollMenuController";
import { ScrollRowType } from "../../../types";
import { useSelector } from "react-redux";
import Star from "../../../components/Icon/Star";
import { GetServerSideProps } from "next";

export default function Task25() {
  const text: string = useSelector((state: any) => state.text["task_2_5_b"]);
  const scrolls: ScrollRowType[] = useSelector(
    (state: any) => state.scrolls.allScrolls
  );

  return (
    <div className={styles["task"]}>
      <div className={styles["task-question"]}>
        <h4>问题五</h4>
        <p>
          请你从上述方案中选出最符合班长要求的方案，在该方案前点亮{" "}
          <Star width={20} height={20} stared={false} />
          ，并解释理由。
          <br /> 注：可以选择多个方案为最佳方案
        </p>
      </div>

      <div className={styles["task-answer"]}>
        <small>{scrolls.length}/20</small>
        <ScrollMenuController />
      </div>

      <div className={styles["task-answer"]}>
        <TextInput
          textId="task_2_5_b"
          text={text}
          placeholder="
          选择最佳方案的理由
          (提示：最佳方案有什么优点和缺点)"
          wordLimit={150}
        />
      </div>
    </div>
  );
}

Task25.getLayout = function getLayout(page: React.ReactNode) {
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