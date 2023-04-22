import React from "react";
import Layout from "../../../components/Layout";
import styles from "../../../theme/page-styles/task.module.scss";
import MultiSelect from "../../../components/MultiSelect/MultiSelect";
import { useSelector } from "react-redux";
import { msTaskType } from "../../../types";

export default function Task23() {
  const options: msTaskType[] = useSelector(
    (state: any) => state.ms.allMSs.ms2Task2
  );

  return (
    <div className={styles["task"]}>
      <div className={styles["task-question"]}>
        <h4>问题三</h4>
        <p>为了解决上述提出的问题，你认为需要考虑哪些条件（多选）？</p>
      </div>

      <div className={styles["task-answer"]}>
        <MultiSelect options={options} taskId="ms2Task2" />
      </div>
    </div>
  );
}

Task23.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
