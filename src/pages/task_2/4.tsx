import React from "react";
import Layout from "../../../components/Layout";
import styles from "../../../theme/page-styles/task.module.scss";
import ScrollMenuController from "../../../components/ScrollMenuController/ScrollMenuController";
import { ScrollRowType } from "../../../types";
import { useSelector } from "react-redux";

export default function Task24() {
  const scrolls: ScrollRowType[] = useSelector(
    (state: any) => state.scrolls.allScrolls
  );
  return (
    <div className={styles["task"]}>
      <div className={styles["task-question"]}>
        <h4>问题四</h4>
        <p>
          请你为他们想出尽可能多的租赁方案，在每一行中选择租赁该类型帐篷的数量，并计算每个方案的价格。
        </p>
      </div>

      <div className={styles["task-answer"]}>
        <small>{scrolls.length}/20</small>
        <ScrollMenuController />
      </div>
    </div>
  );
}

Task24.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
