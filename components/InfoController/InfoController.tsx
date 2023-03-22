import React, { useState } from "react";
import styles from "./InfoController.module.scss";
import { InfoState } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMovieInfo } from "../../redux/slices/movieInfoSlice";
import Chat from "../Chat/Chat";
import Info from "../Info/Info";

function InfoController() {
  const [chatToggle, setChatToggle] = useState(true); // check whether the section is chat or info
  const [chatType, setChatType] = useState(true); // check whether the chat content is movie:true or tent:false
  const [infoType, setInfoType] = useState(true); // chekc whether the info is movie:true or tent:false

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
            {chatType ? <Chat type="movie" /> : <Chat type="tent" />}
          </div>
        ) : (
          <div className={styles["info-content"]}>
            {infoType ? <Info type="movie" /> : <Info type="tent" />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoController;
