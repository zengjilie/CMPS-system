import React, { useState } from "react";
import { ScrollHeaderType, ScrollRowType } from "../../types";
import styles from "./ScrollCard.module.scss";
import { useDispatch } from "react-redux";
import {
  removeScroll,
  scrollHeader,
  updateFinalScroll,
  updateScroll,
} from "../../redux/slices/scrollSlice";
import Delete from "../Icon/Delete";
import Star from "../Icon/Star";
import { useRouter } from "next/router";

const rowHeaders: ScrollHeaderType = scrollHeader;

function ScrollCard({ scrollId, allValues }: ScrollRowType) {
  const dispatch = useDispatch();

  const router = useRouter();
  const taskId = router.pathname.split("/").at(-1);

  const changeHandler = (e: any) => {
    const { value, name } = e.target;
    let data: any = { scrollId };
    data[`${name}`] = value;

    if (taskId !== "6") {
      dispatch(updateScroll({ ...data }));
    } else {
      dispatch(updateFinalScroll({ ...data }));
    }
  };

  return (
    <div className={styles["scroll-card"]}>
      {taskId === "5" && (
        <div className={styles["input"]}>
          <Star
            width={20}
            height={20}
            stared={allValues.stared}
            onClick={() => {
              dispatch(updateScroll({ scrollId, stared: allValues.stared }));
            }}
          />
        </div>
      )}
      <input
        type="number"
        name="type1"
        onChange={(e) => changeHandler(e)}
        value={allValues.type1}
        readOnly={taskId === "5" ? true : false}
        min="0"
      />
      <input
        type="number"
        name="type2"
        onChange={(e) => changeHandler(e)}
        value={allValues.type2}
        readOnly={taskId === "5" ? true : false}
        min="0"
      />
      <input
        type="number"
        name="type3"
        onChange={(e) => changeHandler(e)}
        value={allValues.type3}
        readOnly={taskId === "5" ? true : false}
        min="0"
      />
      <input
        type="number"
        name="type4"
        onChange={(e) => changeHandler(e)}
        value={allValues.type4}
        readOnly={taskId === "5" ? true : false}
        min="0"
      />
      {taskId === "6" && (
        <input
          type="number"
          name="type5"
          onChange={(e) => changeHandler(e)}
          value={allValues.type5}
          min="0"
        />
      )}
      {/* <input type="text" value={allValues.totalprice} readOnly={true} /> */}
      <input
        type="text"
        name="totalprice"
        value={allValues.totalprice}
        placeholder="输入总价..."
        onChange={(e: any) => changeHandler(e)}
        readOnly={taskId === "5" ? true : false}
      />

      {taskId !== "6" && taskId !== "5" && (
        <div className={styles["scroll-card-delete"]}>
          <Delete
            width={20}
            height={20}
            onClick={() => dispatch(removeScroll({ scrollId }))}
          />
        </div>
      )}
    </div>
  );
}

export default ScrollCard;
