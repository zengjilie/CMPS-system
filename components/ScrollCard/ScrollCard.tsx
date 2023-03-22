import React, { useState } from "react";
import { ScrollHeaderType, ScrollRowType } from "../../types";
import styles from "./ScrollCard.module.scss";
import { useDispatch } from "react-redux";
import {
  removeScroll,
  scrollHeader,
  updateScroll,
} from "../../redux/slices/scrollSlice";
import Delete from "../Icon/Delete";

const rowHeaders: ScrollHeaderType[] = scrollHeader;

function ScrollCard({ scrollId, allValues }: ScrollRowType) {
  const dispatch = useDispatch();

  const changeHandler = (e: any, i: 1 | 2 | 3 | 4) => {
    //Update redux
    dispatch(
      updateScroll({ scrollId, typeIndex: i, value: Number(e.target.value) })
    );
  };

  return (
    <div className={styles["scroll-card"]}>
      <input
        type="number"
        onChange={(e) => changeHandler(e, 1)}
        value={allValues.type1}
      />
      <input
        type="number"
        onChange={(e) => changeHandler(e, 2)}
        value={allValues.type2}
      />
      <input
        type="number"
        onChange={(e) => changeHandler(e, 3)}
        value={allValues.type3}
      />
      <input
        type="number"
        onChange={(e) => changeHandler(e, 4)}
        value={allValues.type4}
      />
      <input type="text" value={allValues.totalprice} readOnly={true} />
      <div className={styles["scroll-card-delete"]}>
        <Delete
          width={20}
          height={20}
          onClick={() => dispatch(removeScroll({ scrollId }))}
        />
      </div>
    </div>
  );
}

export default ScrollCard;
