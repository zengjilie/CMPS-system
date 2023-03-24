import React from "react";
import styles from "./ScrollmenuController.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ScrollCard from "../ScrollCard/ScrollCard";
import { ScrollHeaderType, ScrollRowType } from "../../types";
import Plus from "../Icon/Plus";
import { v4 as uuidv4 } from "uuid";
import { addScroll, scrollHeader } from "../../redux/slices/scrollSlice";

const rowHeaders: ScrollHeaderType = scrollHeader;

function ScrollMenuController() {
  const dispatch = useDispatch();
  const scrolls: ScrollRowType[] = useSelector(
    (state: any) => state.scrolls.allScrolls
  );

  return (
    <div className={styles["scrolls-controller"]}>
      <div className={styles["scrolls-header"]}>
        <h4>滚动菜单</h4>
      </div>

      <div className={styles["scrolls-body"]}>
        <div className={styles["scrolls-row-headers"]}>
          {rowHeaders.map((header, i) => (
            <p className={styles["scrolls-row-header"]} key={`row-header${i}`}>
              {header.name}
            </p>
          ))}
          <div className={styles["scrolls-row-padding"]}></div>
        </div>

        {scrolls.map((scroll, i) => (
          <ScrollCard
            key={scroll.scrollId}
            scrollId={scroll.scrollId}
            allValues={scroll.allValues}
          />
        ))}

        <div
          className={styles["add-scroll-btn"]}
          onClick={() => dispatch(addScroll({ scrollId: uuidv4() }))}
        >
          <Plus className={styles["add-scroll-icon"]} height={20} width={20} />
          <p>增加行 . . .</p>
        </div>
      </div>
    </div>
  );
}

export default ScrollMenuController;
