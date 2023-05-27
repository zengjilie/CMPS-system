import React from "react";
import Layout from "../../../components/Layout";
import styles from "../../../theme/page-styles/task.module.scss";
import MultiSelect from "../../../components/MultiSelect/MultiSelect";
import { useSelector } from "react-redux";
import { msTaskType } from "../../../types";
import HelperNote from "../../../components/HelperNote/HelperNote";
import { GetServerSideProps } from "next";

export default function Task12() {
  const options: msTaskType[] = useSelector(
    (state: any) => state.ms.allMSs.ms1Task1
  );

  return (
    <div className={styles["task"]}>
      <div className={styles["task-question"]}>
        <div className={styles["task-question-header"]}>
          <h4>问题二</h4>
          <HelperNote text="单次点击选项以选中该选项，双次点击取消选中。" />
        </div>
        <p>
          为了解决上述提出的问题，小乐搜集整理了一些信息(见信息中心)，请你判断需要哪些信息呢（多选）？
        </p>
      </div>

      <div className={styles["task-answer"]}>
        <MultiSelect options={options} taskId="ms1Task1" />
      </div>
    </div>
  );
}

Task12.getLayout = function getLayout(page: React.ReactNode) {
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
