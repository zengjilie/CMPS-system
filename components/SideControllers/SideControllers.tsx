import React from "react";
import styles from "./SideControllers.module.scss";
import InfoController from "../InfoController/InfoController";
import NotesController from "../NotesController/NotesController";

function SideControllers() {
  return (
    <div className={styles["side-controllers"]}>
      <InfoController />
      <NotesController />
    </div>
  );
}

export default SideControllers;
