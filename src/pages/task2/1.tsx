import React, { useState } from "react";
import Layout from "../../../components/Layout";
import styles from "../../../theme/page-styles/task.module.scss";
import TextInput from "../../../components/TextInput/TextInput";

export default function Task21() {
  const [input, setInput] = useState("");

  return (
    <div className={styles["task"]}>
      <div className={styles["task-question"]}>
        <h4>问题一</h4>
        <p>1. 根据右侧对话，请写出小乐要解决什么问题？</p>
      </div>

      <div className={styles["task-answer"]}>
        <TextInput
          name=""
          text={input}
          setText={setInput}
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
