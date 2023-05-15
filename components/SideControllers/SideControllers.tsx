import React, { useEffect, useRef } from "react";
import styles from "./SideControllers.module.scss";
import InfoController from "../InfoController/InfoController";
import NotesController from "../NotesController/NotesController";

function SideControllers() {
  const dragging = useRef<boolean>(false);
  const sideRef = useRef<any>();

  const mouseMoveHandler = (e: any) => {
    if (dragging.current) {
      if (sideRef.current) {
        sideRef.current.style.width = `${window.innerWidth - e.clientX}px`;
      }
    }
  };

  const mouseDownHandler = (e: any) => {
    dragging.current = true;
  };

  const mouseUpHanlder = (e: any) => {
    dragging.current = false;
  };

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHanlder);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHanlder);
    };
  }, []);

  return (
    <div className={styles["side-controllers"]} ref={sideRef}>
      <div
        className={styles["dragme"]}
        id="dragme"
        onMouseDown={mouseDownHandler}
      ></div>
      <div className={styles["side-controllers-items"]}>
        <InfoController />
        <NotesController />
      </div>
    </div>
  );
}

export default SideControllers;
