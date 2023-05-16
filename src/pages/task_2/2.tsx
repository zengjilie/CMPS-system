import React from "react";
import Layout from "../../../components/Layout";
import styles from "../../../theme/page-styles/task.module.scss";
import MultiSelect from "../../../components/MultiSelect/MultiSelect";
import { msTaskType } from "../../../types";
import { useSelector } from "react-redux";
import HelperNote from "../../../components/HelperNote/HelperNote";
import { GetServerSideProps } from "next";

export default function Task22() {
  const options: msTaskType[] = useSelector(
    (state: any) => state.ms.allMSs.ms1Task2
  );

  return (
    <div className={styles["task"]}>
      <div className={styles["task-question"]}>
        <div className={styles["task-question-header"]}>
          <h4>问题二</h4>
          <HelperNote text="点击一下选中，两下取消选中。" />
        </div>

        <p>
          为了解决上述提出的问题，班长和其他同学搜集整理了相关信息(见信息中心)，请你判断需要哪些信息呢（多选）？
        </p>
      </div>

      <div className={styles["task-answer"]}>
        <MultiSelect options={options} taskId="ms1Task2" />
      </div>
    </div>
  );
}

Task22.getLayout = function getLayout(page: React.ReactNode) {
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