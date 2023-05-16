import React, { useState } from "react";
import Layout from "../../../components/Layout";
import styles from "../../../theme/page-styles/task.module.scss";
import TextInput from "../../../components/TextInput/TextInput";
import { useSelector } from "react-redux";

export default function Task21() {
  const text: string = useSelector((state: any) => state.text["task_2_1_a"]);

  return (
    <div className={styles["task"]}>
      <div className={styles["task-question"]}>
        <h4>问题一</h4>
        <p>根据右侧对话，请写出班长要解决什么问题？</p>
      </div>

      <div className={styles["task-answer"]}>
        <TextInput
          textId="task_2_1_a"
          text={text}
          placeholder="请在此处填写答案..."
          wordLimit={20}
        />
      </div>
    </div>
  );
}

Task21.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
