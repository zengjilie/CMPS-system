import React from "react";
import Layout from "../../../components/Layout";
import styles from "../../../theme/page-styles/task.module.scss";
import MultiSelect from "../../../components/MultiSelect/MultiSelect";
import { useSelector } from "react-redux";
import { msTaskType } from "../../../types";

export default function Task12() {
  const options: msTaskType[] = useSelector(
    (state: any) => state.ms.allMSs.ms1Task1
  );

  return (
    <div className={styles["task"]}>
      <div className={styles["task-question"]}>
        <h4>问题二</h4>
        <p>
          为了解决上述提出的问题，小乐搜集整理了一些信息，请你判断需要哪些信息呢（多选）？
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
