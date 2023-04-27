import React from "react";
import styles from "./HelperNote.module.scss";
import Info from "../Icon/Info";

function HelperNote({ text }: { text: string }) {
  return (
    <div className={styles["helper-note"]}>
      <Info width={20} height={20} />
      <small>{text}</small>
    </div>
  );
}

export default HelperNote;
