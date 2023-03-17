import React from "react";
import styles from "./InfoController.module.scss";
import { InfoState } from "../../types";
import { useSelector } from "react-redux";

function InfoController() {
  const infos: InfoState[] = useSelector((state: any) => state.info);

  return (
    <div className={styles["info-controller"]}>
      <div className={styles["info-header"]}>
        <h4>信息中心</h4>
      </div>
      <div className={styles["info-body"]}>
        <div className={styles["info-nav"]}>
          <ul>
            {infos.map((info, i) => (
              <li
                key={i}
                className={styles["info-nav-item"]}
                value={i}
                style={info.on ? { color: "black" } : { color: "grey" }}
              >
                {info.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["info-content"]}>
          {/* conditionally render the content */}
        </div>
      </div>
    </div>
  );
}

export default InfoController;
