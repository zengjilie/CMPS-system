import React from "react";
import styles from "../Modal.module.scss";
import Button from "../../Button/Button";
import { useRouter } from "next/router";
import { TaskSetType } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { toggleFTModal } from "../../../redux/slices/modalSlice";

function FinishTaskModal() {
  const router = useRouter();
  const taskSet: TaskSetType = router.pathname.split("/")[1] as TaskSetType;
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.modal.isFinishTaskModalOpen);

  return (
    <>
      {isOpen && (
        <div className={styles["modal"]}>
          <div className={styles["modal-content"]}>
            <h3 className={styles["modal-header"]}>
              是否确认结束作答？
              <p onClick={() => dispatch(toggleFTModal())}> &times;</p>
            </h3>
            <p className={styles["modal-text"]}>
              点击结束作答后将无法修改答案。
            </p>
            <div className={styles["modal-buttons"]}>
              <Button
                text="取消"
                click={() => dispatch(toggleFTModal())}
                type="secondary"
              />
              <Button
                text="结束作答"
                click={() => router.push(`/${taskSet}/exp`)}
                type="primary"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FinishTaskModal;
