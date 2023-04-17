import React, { useRef, useState } from "react";
import Layout from "../../../components/Layout";
import styles from "../../../theme/page-styles/task.module.scss";
import DropdownMenuController from "../../../components/DropdownMenuController/DropdownMenuController";
import TextInput from "../../../components/TextInput/TextInput";
import Calculator from "../../../components/Calculator/Calculator";
import Equation from "../../../components/Equation/Equation";
import { useDispatch, useSelector } from "react-redux";
import { showEqua } from "../../../redux/slices/equationSlice";
import Button from "../../../components/Button/Button";
import { showCalc } from "../../../redux/slices/calculatorSlice";
import ScrollMenuController from "../../../components/ScrollMenuController/ScrollMenuController";

export default function Task26() {
  const dispatch = useDispatch();
  const equaRef = useRef<HTMLTextAreaElement>(null);

  const textA: string = useSelector((state: any) => state.text["task_2_6_1_a"]);
  const textB: string = useSelector((state: any) => state.text["task_2_6_1_b"]);

  return (
    <div className={styles["task"]}>
      <div className={styles["task-question"]}>
        <h4>问题六</h4>
        <p>
          1.
          露营活动当天，老板更新了帐篷的实际库存，又购入了一种新型帐篷D（见信息中心）。
          请你设计一个租赁方案，并在下方方框内输入你的思路和计算过程，然后给出最佳方案。
        </p>
      </div>

      <div className={styles["task-answer"]}>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <Button
            type="calc"
            text="计算器"
            click={() => {
              dispatch(showCalc());
            }}
          />

          <Button
            type="equa"
            text="插入符号"
            click={() => {
              dispatch(showEqua());
            }}
          />
        </div>

        <Calculator />
        <Equation textId="task_2_6_1_b" addRef={equaRef} />

        <div className={styles["task-text"]}>
          <TextInput
            textId="task_2_6_1_a"
            text={textA}
            placeholder="请在此处填写思路..."
            wordLimit={150}
          />

          <TextInput
            textId="task_2_6_1_b"
            text={textB}
            equaRef={equaRef}
            placeholder="请在此处填写计算过程..."
            wordLimit={150}
          />
        </div>
      </div>

      <div className={styles["task-question"]}>
        <p>2. 请填写最终答案。</p>
      </div>

      <div className={styles["task-answer"]}>
        <ScrollMenuController />
      </div>
    </div>
  );
}

Task26.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
