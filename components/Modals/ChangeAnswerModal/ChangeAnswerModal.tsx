import React from "react";
import styles from "../Modal.module.scss";

function ChangeAnswerModal() {
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-header"]}></div>
      <div className={styles["modal-image"]}></div>
      <div className={styles["modal-buttons"]}></div>
    </div>
  );
}

export default ChangeAnswerModal;
