import React from "react";
import styles from "./NotesController.module.scss";

function NotesController() {
  return (
    <div className={styles["notes-controller"]}>
      <div className={styles["notes-header"]}>
        <h4>笔记</h4>
      </div>

      <div className={styles["notes-body"]}>
        <div className={styles["notes-nav"]}></div>
      </div>
    </div>
  );
}

export default NotesController;
