import React, { useState } from "react";
import styles from "./InfoController.module.scss";
import Chat from "../Chat/Chat";
import Info from "../Info/Info";
import { useRouter } from "next/router";
import { RecordType, TaskIdType, TaskSetType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { addRecord } from "../../redux/slices/recordSlice";

function InfoController() {
  const [chatToggle, setChatToggle] = useState(true); // check whether the section is chat or info
  const dispatch = useDispatch<any>();
  const userid = useSelector((state: any) => state.user.userid);

  const router = useRouter();
  const taskSet: TaskSetType = router.pathname.split("/")[1] as TaskSetType;
  const taskId: TaskIdType = router.pathname.split("/").at(-1) as TaskIdType;

  const handleInfoClick = () => {
    const record: RecordType = {
      userid: userid,
      taskcode: `${taskSet === "task_1" ? "A" : "B"}${taskId}`,
      action: !chatToggle ? `chat${taskId}` : `info${taskId}`,
      section: "interaction",
      createdat: new Date().toISOString(),
    };

    setChatToggle(!chatToggle);

    dispatch(addRecord({ record }));
  };

  return (
    <div className={styles["info-controller"]}>
      <div className={styles["info-header"]}>
        <h4
          className={chatToggle ? styles.on : styles.off}
          onClick={() => handleInfoClick()}
        >
          聊天记录
        </h4>
        <h4
          className={!chatToggle ? styles.on : styles.off}
          onClick={() => handleInfoClick()}
        >
          信息中心
        </h4>
      </div>

      <div className={styles["info-body"]}>
        {chatToggle ? (
          <div className={styles["chat-content"]}>
            {taskSet === "task_1" ? (
              <Chat type="movie" />
            ) : (
              <Chat type="tent" />
            )}
          </div>
        ) : (
          <div className={styles["info-content"]}>
            {taskSet === "task_1" ? (
              <Info type="movie" />
            ) : (
              <Info type="tent" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoController;
