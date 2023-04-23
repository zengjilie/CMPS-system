import React, { useState } from "react";
import Layout from "../../../components/Layout";
import styles from "../../../theme/page-styles/task.module.scss";
import DropdownMenuController from "../../../components/DropdownMenuController/DropdownMenuController";
import TextInput from "../../../components/TextInput/TextInput";
import { useSelector } from "react-redux";
import { DropdownRowType } from "../../../types";
import Star from "../../../components/Icon/Star";

export default function Task15() {
  const text: string = useSelector((state: any) => state.text["task_1_5_b"]);
  const dropdowns: DropdownRowType[] = useSelector(
    (state: any) => state.dropdowns.allDropdowns
  );

  return (
    <div className={styles["task"]}>
      <div className={styles["task-question"]}>
        <h4>问题五</h4>
        <p>
          请你从上述方案中选出最适合小乐要求的方案，在该方案前点亮{" "}
          <Star width={20} height={20} stared={false} />
          ，并解释理由。
          <br />
          注：可以选择多个方案为最佳方案
        </p>
      </div>

      <div className={styles["task-answer"]}>
        <small>{dropdowns.length}/20</small>
        <DropdownMenuController />
      </div>

      <div className={styles["task-question"]}>
        <p></p>
      </div>

      <div className={styles["task-answer"]}>
        <TextInput
          textId="task_1_5_b"
          text={text}
          wordLimit={100}
          placeholder="
          选择最佳方案的理由
          (提示：最佳方案有什么优点和缺点)
          "
        />
      </div>
    </div>
  );
}

Task15.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
