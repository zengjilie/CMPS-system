import React from "react";
import styles from "../Modal.module.scss";
import Button from "../../Button/Button";
import { useRouter } from "next/router";
import { RecordType, TaskIdType, TaskSetType } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { toggleFTModal } from "../../../redux/slices/modalSlice";
import { addLastRecord, addRecord } from "../../../redux/slices/recordSlice";

function FinishTaskModal() {
  const userid = useSelector((state: any) => state.user.userid);
  const router = useRouter();
  const taskSet: TaskSetType = router.pathname.split("/")[1] as TaskSetType;
  const taskId: TaskIdType = router.pathname.split("/").at(-1) as TaskIdType;
  const dispatch = useDispatch<any>();
  const isOpen = useSelector((state: any) => state.modal.isFinishTaskModalOpen);

  const handleEndTask = () => {
    const record: RecordType = {
      userid: userid,
      taskcode: `${taskSet === "task_1" ? "A" : "B"}${taskId}`,
      action: "taskend",
      section: "system",
      createdat: new Date().toISOString(),
    };

    if (taskSet === "task_2" && taskId === "6") {
      dispatch(addLastRecord({ record }));
    } else {
      dispatch(addRecord({ record }));
    }

    dispatch(toggleFTModal());
    router.push(`/${taskSet}/exp`);
  };
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
                click={() => handleEndTask()}
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
