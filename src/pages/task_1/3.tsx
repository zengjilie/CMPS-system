import React from "react";
import Layout from "../../../components/Layout";
import styles from "../../../theme/page-styles/task.module.scss";
import MultiSelect from "../../../components/MultiSelect/MultiSelect";
import { msTaskType } from "../../../types";
import { useSelector } from "react-redux";
import HelperNote from "../../../components/HelperNote/HelperNote";
import { GetServerSideProps } from "next";

export default function Task13() {
  const options: msTaskType[] = useSelector(
    (state: any) => state.ms.allMSs.ms2Task1
  );

  return (
    <div className={styles["task"]}>
      <div className={styles["task-question"]}>
        <div className={styles["task-question-header"]}>
          <h4>问题三</h4>
          <HelperNote text="单次点击选项以选中该选项，双次点击取消选中。" />
        </div>
        <p>
          根据聊天记录和信息中心的已知信息，为了解决小乐遇到的问题，你认为需要考虑哪些条件（多选）？
        </p>
      </div>

      <div className={styles["task-answer"]}>
        <MultiSelect options={options} taskId="ms2Task1" />
      </div>
    </div>
  );
}

Task13.getLayout = function getLayout(page: React.ReactNode) {
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
