import React from "react";
import Layout from "../../../components/Layout";
import styles from "../../../theme/page-styles/task.module.scss";
import MultiSelect from "../../../components/MultiSelect/MultiSelect";
import { msTaskType } from "../../../types";
import { useSelector } from "react-redux";

export default function Task22() {
  const options: msTaskType[] = useSelector(
    (state: any) => state.ms.allMSs.ms1Task2
  );

  return (
    <div className={styles["task"]}>
      <div className={styles["task-question"]}>
        <h4>问题二</h4>
        <p>
          1.
          为了解决上述提出的问题，班长和其他同学搜集整理了相关信息，请你判断需要哪些信息呢（多选）？
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
