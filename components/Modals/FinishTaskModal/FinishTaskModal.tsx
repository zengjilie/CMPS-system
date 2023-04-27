import React from "react";
import styles from "../Modal.module.scss";
import Button from "../../Button/Button";
import { useRouter } from "next/router";
import { TaskSetType } from "../../../types";

function FinishTaskModal() {
  const router = useRouter();
  const taskSet: TaskSetType = router.pathname.split("/")[1] as TaskSetType;

  return (
    <div className={styles["modal"]}>
      <h2 className={styles["modal-header"]}>热身练习</h2>
      <p className={styles["modal-text"]}>请完成以下所有热身</p>
      <div className={styles["modal-buttons"]}>
        <Button text="取消" click={() => {}} type="primary" />
        <Button
          text="完成作答"
          click={() => router.push(`${taskSet}/exp`)}
          type="primary"
        />
      </div>
    </div>
  );
}

export default FinishTaskModal;
