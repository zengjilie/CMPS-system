import React, { useState } from "react";
import styles from "./InfoController.module.scss";
import Chat from "../Chat/Chat";
import Info from "../Info/Info";
import { useRouter } from "next/router";

function InfoController() {
  const [chatToggle, setChatToggle] = useState(true); // check whether the section is chat or info

  const router = useRouter();
  const taskSet = router.pathname.split("/")[1];
  return (
    <div className={styles["info-controller"]}>
      <div className={styles["info-header"]}>
        <h4
          className={chatToggle ? styles.on : styles.off}
          onClick={() => setChatToggle(!chatToggle)}
        >
          聊天记录
        </h4>
        <h4
          className={!chatToggle ? styles.on : styles.off}
          onClick={() => setChatToggle(!chatToggle)}
        >
          信息中心
        </h4>
      </div>

      <div className={styles["info-body"]}>
        {chatToggle ? (
          <div className={styles["chat-content"]}>
            {taskSet === "task1" ? <Chat type="movie" /> : <Chat type="tent" />}
          </div>
        ) : (
          <div className={styles["info-content"]}>
            {taskSet === "task1" ? <Info type="movie" /> : <Info type="tent" />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoController;
