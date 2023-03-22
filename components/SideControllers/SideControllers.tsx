import React from "react";
import styles from "./SideControllers.module.scss";
import InfoController from "../InfoController/InfoController";
import NotesController from "../NotesController/NotesController";
import ScrollMenuController from "../ScrollMenuController/ScrollMenuController";

function SideControllers() {
  return (
    <div className={styles["side-controllers"]}>
      <InfoController />
      <NotesController />
      {/* <ScrollMenuController /> */}
    </div>
  );
}

export default SideControllers;
