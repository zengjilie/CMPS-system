import React from "react";
import styles from "./ScrollMenuController.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ScrollCard from "../ScrollCard/ScrollCard";
import { ScrollHeaderType, ScrollRowType } from "../../types";
import Plus from "../Icon/Plus";
import { v4 as uuidv4 } from "uuid";
import { addScroll, scrollHeader } from "../../redux/slices/scrollSlice";
import { useRouter } from "next/router";
import Star from "../Icon/Star";

const rowHeaders: ScrollHeaderType = scrollHeader;

function ScrollMenuController() {
  const router = useRouter();
  const dispatch = useDispatch();
  const scrolls: ScrollRowType[] = useSelector(
    (state: any) => state.scrolls.allScrolls
  );
  const finalScroll: ScrollRowType = useSelector(
    (state: any) => state.scrolls.finalScroll
  );

  const taskId = router.pathname.split("/").at(-1);

  return (
    <div className={styles["scrolls-controller"]}>
      <div className={styles["scrolls-body"]}>
        <div className={styles["scrolls-row-headers"]}>
          {rowHeaders.map((header, i) => {
            if (
              ((taskId === "4" || taskId === "6") && header.name === "红星") ||
              (taskId !== "6" && header.name === "D")
            ) {
              return <React.Fragment key={`row-header${i}`}></React.Fragment>;
            } else if (taskId === "5" && header.name === "红星") {
              return (
                <div
                  className={styles["scrolls-row-header"]}
                  key={`row-header${i}`}
                >
                  <Star width={20} height={20} stared={false} />
                </div>
              );
            } else {
              return (
                <p
                  className={styles["scrolls-row-header"]}
                  key={`row-header${i}`}
                >
                  {header.name}
                </p>
              );
            }
          })}
          {taskId !== "6" && taskId !== "5" && (
            <div className={styles["scrolls-row-padding"]}></div>
          )}
        </div>

        {taskId !== "6" ? (
          <>
            {scrolls.map((scroll, i) => (
              <ScrollCard
                key={scroll.scrollId}
                scrollId={scroll.scrollId}
                allValues={scroll.allValues}
              />
            ))}
          </>
        ) : (
          <ScrollCard
            scrollId={finalScroll.scrollId}
            allValues={finalScroll.allValues}
          />
        )}

        {taskId !== "6" && taskId !== "5" && (
          <div
            className={styles["add-scroll-btn"]}
            onClick={() => dispatch(addScroll({ scrollId: uuidv4() }))}
          >
            <Plus
              className={styles["add-scroll-icon"]}
              height={20}
              width={20}
            />
            <p>增加行 . . .</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScrollMenuController;
